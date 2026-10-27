export interface ClubPresident {
  name: string;
  grade: string;
  email: string;
  avatar: string;
}

export interface UpcomingEvent {
  title: string;
  date: string;
  venue: string;
}

export interface CampusClub {
  id: string;
  name: string;
  category: string;
  badge: string;
  icon: string;
  color: string;
  desc: string;
  membersCount: number;
  meetingSchedule: string;
  room: string;
  president: ClubPresident;
  adviser: string;
  upcomingEvent: UpcomingEvent;
}

export const CAMPUS_CLUBS: CampusClub[] = [
  {
    id: "robotics-ai",
    name: "Robotics & Artificial Intelligence Guild",
    category: "STEM & Tech",
    badge: "National Finalist",
    icon: "🤖",
    color: "#3b82f6",
    desc: "Designing autonomous rovers, IoT sensors, and participating in regional robotics hackathons and maker faires.",
    membersCount: 48,
    meetingSchedule: "Wednesdays & Fridays, 4:00 PM",
    room: "Tech Innovation Lab 204",
    president: {
      name: "Marcus Gabriel Tan",
      grade: "Grade 12 STEM",
      email: "marcus.tan@students.edusphere.edu",
      avatar: "MT"
    },
    adviser: "Engr. David Santos",
    upcomingEvent: {
      title: "National RoboCup Trial & Drone Coding Workshop",
      date: "Nov 12, 2026",
      venue: "Makerspace Hall B"
    }
  },
  {
    id: "supreme-student-council",
    name: "Supreme Student Council (SSC)",
    category: "Leadership",
    badge: "Official Governance",
    icon: "🏛️",
    color: "#8b5cf6",
    desc: "The premier student representation body championing student rights, campus wellness programs, and student-led initiatives.",
    membersCount: 32,
    meetingSchedule: "Mondays, 4:30 PM",
    room: "SSC Council Chamber (Admin Wing)",
    president: {
      name: "Kirsten Andrea Castaneda",
      grade: "Grade 11 HUMSS",
      email: "kirsten.ssc@students.edusphere.edu",
      avatar: "KC"
    },
    adviser: "Dean Lourdes Ramos",
    upcomingEvent: {
      title: "General Student Assembly & Open Forum",
      date: "Nov 08, 2026",
      venue: "University Auditorium"
    }
  },
  {
    id: "debate-society",
    name: "Dialectics & Debate Society",
    category: "Academic & Speech",
    badge: "Championship Circuit",
    icon: "⚖️",
    color: "#f59e0b",
    desc: "Competitive parliamentary debate, public speaking training, and inter-school Model United Nations delegations.",
    membersCount: 26,
    meetingSchedule: "Tuesdays & Thursdays, 4:00 PM",
    room: "Speech & Audio-Visual Room 3",
    president: {
      name: "Alyssa Danielle Ocampo",
      grade: "Grade 12 ABM",
      email: "alyssa.debate@students.edusphere.edu",
      avatar: "AO"
    },
    adviser: "Prof. Victor Manalo",
    upcomingEvent: {
      title: "Inter-High Parliamentary Interschool Cup",
      date: "Nov 20, 2026",
      venue: "Moot Court Hall"
    }
  },
  {
    id: "theater-arts",
    name: "Dramatis Theater & Performing Arts",
    category: "Arts & Culture",
    badge: "Annual Play Production",
    icon: "🎭",
    color: "#ec4899",
    desc: "Stage acting, scriptwriting, musical accompaniment, and technical set/lighting design for major school theatre showcases.",
    membersCount: 54,
    meetingSchedule: "Tuesdays & Fridays, 4:30 PM",
    room: "Main Cultural Auditorium",
    president: {
      name: "Julian Kyle Herrera",
      grade: "Grade 11 Arts Track",
      email: "julian.theater@students.edusphere.edu",
      avatar: "JH"
    },
    adviser: "Ms. Regina Villanueva",
    upcomingEvent: {
      title: "Winter Musical Auditions & Stagehand Casting",
      date: "Nov 15, 2026",
      venue: "Black Box Studio"
    }
  },
  {
    id: "red-cross-youth",
    name: "Red Cross Youth & First Aid Corps",
    category: "Community & Health",
    badge: "Certified Life Savers",
    icon: "🩺",
    color: "#ef4444",
    desc: "Certified basic life support, disaster preparedness, campus first aid dispatch, and humanitarian blood drives.",
    membersCount: 65,
    meetingSchedule: "Thursdays, 3:30 PM",
    room: "Campus Health Services Annex",
    president: {
      name: "Chloe Bianca Rivera",
      grade: "Grade 12 Health Allied",
      email: "chloe.redcross@students.edusphere.edu",
      avatar: "CR"
    },
    adviser: "Nurse Elena Bautista, RN",
    upcomingEvent: {
      title: "Campus CPR & Emergency Triage Certification",
      date: "Nov 18, 2026",
      venue: "Gymnasium Health Pavilion"
    }
  },
  {
    id: "varsity-athletics",
    name: "Titans Varsity Athletics & Sports League",
    category: "Sports & Fitness",
    badge: "League Champions",
    icon: "🏆",
    color: "#10b981",
    desc: "Basketball, Volleyball, Badminton, and Track disciplines promoting sportsmanship, athletic excellence, and teamwork.",
    membersCount: 78,
    meetingSchedule: "Daily Training, 5:00 AM / 4:30 PM",
    room: "Athletics Complex & Fitness Center",
    president: {
      name: "Rafael Joaquin Gomez",
      grade: "Grade 12 Sports Track",
      email: "rafael.varsity@students.edusphere.edu",
      avatar: "RG"
    },
    adviser: "Coach Antonio Perez",
    upcomingEvent: {
      title: "Inter-Campus Intramural Championship Tryouts",
      date: "Nov 25, 2026",
      venue: "Main Covered Court"
    }
  }
];
