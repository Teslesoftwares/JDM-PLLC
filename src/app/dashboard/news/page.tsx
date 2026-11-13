"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  websiteEventActivities,
  websiteEvents,
  websiteNewsUpdates,
} from "@/config/website-content";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  status: string;
  publishedAt?: string;
  createdAt: string;
}

export default function NewsManagementPage() {
  const [news, setNews] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", excerpt: "", content: "", featuredImage: "" });

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data.posts || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent, publish = false) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await fetch("/api/news", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...formData, status: publish ? "PUBLISHED" : "DRAFT" }),
        });
        if (res.ok) {
          await fetchPosts();
          resetForm();
        }
      } else {
        const res = await fetch("/api/news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, status: publish ? "PUBLISHED" : "DRAFT" }),
        });
        if (res.ok) {
          await fetchPosts();
          resetForm();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", excerpt: "", content: "", featuredImage: "" });
    setShowForm(false);
    setEditingId(null);
  };

  const editPost = (post: Post) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content,
      featuredImage: post.featuredImage || "",
    });
    setEditingId(post.id);
    setShowForm(true);
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(`/api/news?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setNews(news.filter((n) => n.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const togglePublish = async (post: Post) => {
    try {
      const res = await fetch("/api/news", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: post.id, status: post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED" }),
      });
      if (res.ok) {
        await fetchPosts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold">News and Project Updates</h2>
        <button
          onClick={() => {
            if (showForm && editingId) {
              resetForm();
            } else {
              setShowForm(!showForm);
              setEditingId(null);
              setFormData({ title: "", excerpt: "", content: "", featuredImage: "" });
            }
          }}
          className="rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
        >
          {showForm && !editingId ? "Cancel" : editingId ? "Cancel Edit" : "Add News Update"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-lg border bg-white p-4 shadow-sm sm:p-6">
          <h3 className="mb-4 text-lg font-medium">{editingId ? "Edit Update" : "Create New Update"}</h3>
          <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full rounded border px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Summary</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full rounded border px-3 py-2"
                rows={2}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full rounded border px-3 py-2"
                rows={6}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Featured Image URL</label>
              <input
                type="text"
                value={formData.featuredImage}
                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                className="w-full rounded border px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button type="submit" className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">Save as Draft</button>
              <button type="button" onClick={(e) => handleSubmit(e, true)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Publish</button>
            </div>
          </form>
        </div>
      )}

      <div className="mb-6 overflow-hidden rounded-lg border bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="text-lg font-medium">Published on the website</h3>
            <p className="mt-1 text-sm text-gray-600">
              Everything currently live on the public News and Events pages. This
              content is read-only here.
            </p>
          </div>
          <div className="flex gap-4 text-sm font-medium">
            <a href="/news" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              View /news
            </a>
            <a href="/events" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              View /events
            </a>
          </div>
        </div>
        <div className="divide-y">
          {websiteNewsUpdates.map((update) => (
            <div key={`${update.date}-${update.title}`} className="px-4 py-4 sm:px-6">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-blue-100 px-2 py-0.5 font-medium text-blue-700">News</span>
                <span className="text-gray-500">{update.date}</span>
                {update.images.length > 0 ? (
                  <span className="text-gray-500">
                    · {update.images.length} image{update.images.length === 1 ? "" : "s"}
                  </span>
                ) : null}
              </div>
              <h4 className="font-medium">{update.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{update.body}</p>
              {update.images.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {update.images.map((image) => (
                    <Image
                      key={image.file}
                      src={`/endorsements-news-updates/${image.file}`}
                      alt={image.alt}
                      width={72}
                      height={72}
                      className="h-16 w-16 rounded border object-cover"
                    />
                  ))}
                </div>
              ) : null}
              {update.articleUrl ? (
                <a
                  href={update.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
                >
                  Read the report on MyJoyOnline
                </a>
              ) : null}
            </div>
          ))}
          {websiteEvents.map((event) => (
            <div key={event.title} className="px-4 py-4 sm:px-6">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-700">Event</span>
                <span className="text-gray-500">
                  {event.date} · {event.time}
                </span>
              </div>
              <h4 className="font-medium">{event.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{event.venue}</p>
              <p className="mt-2 text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
        <div className="border-t bg-gray-50 px-4 py-3 text-sm text-gray-600 sm:px-6">
          <p className="font-medium">Planned activities on /events:</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {websiteEventActivities.map((activity) => (
              <li key={activity.title}>{activity.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium">News and Updates</h3>
        </div>
        {loading ? (
          <p className="p-6">Loading...</p>
        ) : news.length === 0 ? (
          <p className="p-6 text-gray-600">No articles yet</p>
        ) : (
          <div className="divide-y">
            {news.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    {new Date(item.createdAt).toLocaleDateString()} • 
                    <span className={item.status === 'PUBLISHED' ? 'text-green-600' : 'text-yellow-600'}> {item.status}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => togglePublish(item)} className="rounded border px-3 py-1 text-sm hover:bg-gray-50">
                    {item.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                  </button>
                  <button onClick={() => editPost(item)} className="rounded border px-3 py-1 text-sm hover:bg-gray-50">Edit</button>
                  <button onClick={() => deletePost(item.id)} className="rounded border px-3 py-1 text-sm text-red-600 hover:bg-red-50">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
