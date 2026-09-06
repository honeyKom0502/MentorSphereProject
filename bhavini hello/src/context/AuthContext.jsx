import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateUniquePublicId } from '../data/codenameGenerator';

const AuthContext = createContext();

const DEMO_ACCOUNTS = {
  junior: {
    id: 'usr-1',
    fullName: 'Bhavini Singh',
    email: 'bhavini.singh@college.edu',
    role: 'Junior',
    publicId: 'PixelNinja',
    avatar: 'avatar-1',
    skills: ['DSA', 'Python', 'C++', 'React'],
    interests: ['DSA & Problem Solving', 'Placements Preparation', 'AI / ML'],
    joinedChannels: ['dsa', 'web-dev', 'placements', 'college-life', 'projects'],
    connectedMentors: ['mentor-1', 'mentor-2', 'mentor-5'],
    savedResources: ['res-1', 'res-2', 'res-3', 'res-4'],
    helpedCount: 14,
    questionsAsked: 8,
    discussionsParticipated: 23,
    createdAt: '2025-09-01'
  },
  senior: {
    id: 'usr-2',
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@college.edu',
    role: 'Senior',
    publicId: 'KnightRider',
    avatar: 'avatar-2',
    skills: ['DSA', 'Java', 'Spring Boot', 'System Design', 'C++'],
    interests: ['Placements Preparation', 'Competitive Programming', 'Mock Interviews'],
    joinedChannels: ['dsa', 'placements', 'cp', 'cloud-devops', 'projects', 'web-dev', 'internships'],
    connectedMentors: ['mentor-2', 'mentor-6'],
    savedResources: ['res-1', 'res-5', 'res-8'],
    helpedCount: 142,
    questionsAsked: 3,
    discussionsParticipated: 89,
    createdAt: '2023-08-15'
  },
  alumni: {
    id: 'usr-3',
    fullName: 'Ananya Rao',
    email: 'ananya.rao@alumni.college.edu',
    role: 'Alumni',
    publicId: 'SolarPriestess',
    avatar: 'avatar-3',
    skills: ['Machine Learning', 'PyTorch', 'Distributed Systems', 'Python', 'Azure'],
    interests: ['AI / ML', 'Higher Studies (MS/GATE)', 'Research & Papers'],
    joinedChannels: ['ai-ml', 'placements', 'higher-studies', 'projects'],
    connectedMentors: [],
    savedResources: ['res-2', 'res-4'],
    helpedCount: 230,
    questionsAsked: 1,
    discussionsParticipated: 145,
    createdAt: '2021-08-10'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('mentorsphere-user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEMO_ACCOUNTS.junior;
      }
    }
    return DEMO_ACCOUNTS.junior;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('mentorsphere-user') || true;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('mentorsphere-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('mentorsphere-user');
    }
  }, [user]);

  const login = (email, password) => {
    // Check if matches any demo account
    const found = Object.values(DEMO_ACCOUNTS).find(acc => acc.email.toLowerCase() === email.toLowerCase());
    if (found) {
      setUser(found);
      setIsAuthenticated(true);
      return { success: true };
    }
    // Generic login
    const newUser = {
      id: 'usr-' + Date.now(),
      fullName: email.split('@')[0].replace('.', ' '),
      email,
      role: 'Junior',
      publicId: generateUniquePublicId(),
      avatar: 'avatar-1',
      skills: ['DSA', 'Python'],
      interests: ['DSA & Problem Solving', 'Placements Preparation'],
      joinedChannels: ['dsa', 'web-dev', 'placements'],
      connectedMentors: ['mentor-1'],
      savedResources: [],
      helpedCount: 0,
      questionsAsked: 0,
      discussionsParticipated: 0,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return { success: true };
  };

  const signup = (userData) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      fullName: userData.fullName || 'Student',
      email: userData.email,
      role: userData.role || 'Junior',
      publicId: userData.publicId || generateUniquePublicId(),
      avatar: userData.avatar || 'avatar-1',
      skills: userData.skills || ['DSA', 'Python'],
      interests: userData.interests || ['DSA & Problem Solving', 'Placements Preparation'],
      joinedChannels: ['dsa', 'web-dev', 'placements'],
      connectedMentors: [],
      savedResources: [],
      helpedCount: 0,
      questionsAsked: 0,
      discussionsParticipated: 0,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('mentorsphere-user');
  };

  const switchDemoRole = (roleKey) => {
    if (DEMO_ACCOUNTS[roleKey]) {
      setUser(DEMO_ACCOUNTS[roleKey]);
      setIsAuthenticated(true);
    }
  };

  const updateProfile = (updates) => {
    setUser(prev => ({
      ...prev,
      ...updates
    }));
  };

  const toggleJoinChannel = (channelId) => {
    setUser(prev => {
      if (!prev) return prev;
      const isJoined = prev.joinedChannels.includes(channelId);
      const newJoined = isJoined 
        ? prev.joinedChannels.filter(id => id !== channelId)
        : [...prev.joinedChannels, channelId];
      return { ...prev, joinedChannels: newJoined };
    });
  };

  const toggleConnectMentor = (mentorId) => {
    setUser(prev => {
      if (!prev) return prev;
      const isConnected = prev.connectedMentors.includes(mentorId);
      const newConnected = isConnected
        ? prev.connectedMentors.filter(id => id !== mentorId)
        : [...prev.connectedMentors, mentorId];
      return { ...prev, connectedMentors: newConnected };
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      signup,
      logout,
      switchDemoRole,
      updateProfile,
      toggleJoinChannel,
      toggleConnectMentor
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
