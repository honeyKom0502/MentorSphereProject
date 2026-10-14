import { apiRequest } from './api';

export const fetchDiscussions = async ({ signal } = {}) => {
  const data = await apiRequest('/api/discussions', { signal });
  return data.discussions || [];
};

export const createDiscussion = async ({ channelId, title, content, tags }) => {
  const data = await apiRequest('/api/discussions', {
    method: 'POST',
    body: { channelId, title, content, tags }
  });
  return data.discussion;
};

export const createReply = async (discussionId, content) => {
  const data = await apiRequest(
    `/api/discussions/${encodeURIComponent(discussionId)}/replies`,
    { method: 'POST', body: { content } }
  );
  return { reply: data.reply, discussion: data.discussion };
};
