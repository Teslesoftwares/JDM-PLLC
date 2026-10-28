"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchPosts();
  }, []);

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
        <h2 className="text-2xl font-semibold">News Management</h2>
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
          {showForm && !editingId ? "Cancel" : editingId ? "Cancel Edit" : "Add News Article"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-lg border bg-white p-4 shadow-sm sm:p-6">
          <h3 className="mb-4 text-lg font-medium">{editingId ? "Edit Article" : "Create New Article"}</h3>
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
              <label className="mb-1 block text-sm font-medium">Excerpt</label>
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

      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium">All Articles</h3>
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
