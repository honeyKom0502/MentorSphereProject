export class UserModel {
  constructor({ fullName, email, passwordHash, role = 'Junior', publicId, avatar = 'avatar-1', skills = [], interests = [], joinedChannels = [], connectedMentors = [], savedResources = [] }) {
    this.id = 'usr-' + Date.now();
    this.fullName = fullName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role; // 'Junior' | 'Senior' | 'Alumni'
    this.publicId = publicId; // e.g. KnightRider
    this.avatar = avatar; // e.g. avatar-1
    this.skills = skills;
    this.interests = interests;
    this.joinedChannels = joinedChannels;
    this.connectedMentors = connectedMentors;
    this.savedResources = savedResources;
    this.createdAt = new Date().toISOString();
  }
}
