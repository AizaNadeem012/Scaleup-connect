"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Award, Users, Clock, Globe } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years",
      expertise: "Strategic Leadership & Business Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      achievements: ["Built 3 successful startups", "500+ executive placements", "Industry thought leader"],
      linkedin: "#",
      email: "sarah@scaleupconnect.com"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology Recruitment",
      experience: "12+ years",
      expertise: "Tech Talent Acquisition & AI Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      achievements: ["1000+ tech placements", "AI recruitment pioneer", "Top 1% recruiter globally"],
      linkedin: "#",
      email: "michael@scaleupconnect.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Recruitment Director",
      experience: "10+ years",
      expertise: "Healthcare & Life Sciences Talent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      achievements: ["800+ healthcare placements", "Medical board certified", "Global healthcare network"],
      linkedin: "#",
      email: "emily@scaleupconnect.com"
    },
    {
      name: "David Thompson",
      role: "Executive Search Partner",
      experience: "18+ years",
      expertise: "C-Suite & Board Placements",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      achievements: ["200+ C-suite placements", "Fortune 500 specialist", "Board member advisor"],
      linkedin: "#",
      email: "david@scaleupconnect.com"
    },
    {
      name: "Lisa Park",
      role: "Operations Director",
      experience: "8+ years",
      expertise: "Process Optimization & Client Success",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      achievements: ["98% client satisfaction", "Process automation expert", "Six Sigma certified"],
      linkedin: "#",
      email: "lisa@scaleupconnect.com"
    },
    {
      name: "James Wilson",
      role: "Global Expansion Lead",
      experience: "14+ years",
      expertise: "International Recruitment & Market Entry",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      achievements: ["25+ countries served", "Cross-cultural expert", "Global mobility specialist"],
      linkedin: "#",
      email: "james@scaleupconnect.com"
    }
  ];

  const teamStats = [
    { icon: Users, value: "50+", label: "Expert Recruiters" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAzNzI4IiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003728] mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            Our diverse team of recruitment experts brings decades of experience and industry knowledge to help you find the perfect talent.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {teamStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-[#003728]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-[#003728]" />
              </div>
              <div className="text-3xl font-bold text-[#003728] mb-2">{stat.value}</div>
              <div className="text-[#003728]/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#003728]/10 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003728] mb-1">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-[#003728]/70 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-[#003728]/60 mb-3">
                  {member.experience} • {member.expertise}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {member.achievements.map((achievement, achievementIdx) => (
                    <div key={achievementIdx} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#003728] flex-shrink-0" />
                      <span className="text-sm text-[#003728]/70">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#003728] to-[#002A1F] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Work with Industry Experts
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team combines deep industry knowledge with cutting-edge technology to deliver exceptional results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#003728] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Meet Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
