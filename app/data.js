// USERS
export const data = {
  users: [
    {
      id: "user-1",
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "👩‍💻",
      createdAt: new Date("2024-01-15"),
    },
    {
      id: "user-2",
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "👨‍💼",
      createdAt: new Date("2024-02-20"),
    },
    {
      id: "user-3",
      name: "Carol Davis",
      email: "carol@example.com",
      avatar: "👩‍🎨",
      createdAt: new Date("2024-03-10"),
    },
  ],

  // PROJECTS (connected to users)
  projects: [
    {
      id: "project-1",
      name: "Website Redesign",
      description: "Complete overhaul of company website",
      userId: "user-1", // Owned by Alice
      collaborators: ["user-2", "user-3"], // Bob & Carol collaborating
      color: "#3b82f6",
      createdAt: new Date("2024-06-01"),
    },
    {
      id: "project-2",
      name: "Mobile App",
      description: "New customer mobile application",
      userId: "user-2", // Owned by Bob
      collaborators: ["user-1"], // Alice collaborating
      color: "#10b981",
      createdAt: new Date("2024-07-15"),
    },
    {
      id: "project-3",
      name: "Marketing Campaign",
      description: "Q4 product launch campaign",
      userId: "user-3", // Owned by Carol
      collaborators: [], // No collaborators
      color: "#f59e0b",
      createdAt: new Date("2024-08-20"),
    },
  ],

  // TODOS (connected to projects & users)
  todos: [
    // Project 1 Todos
    {
      id: "todo-1",
      title: "Design homepage",
      description: "Create wireframes and mockups Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      projectId: "project-1", // Website Redesign
      userId: "user-3", // Assigned to Carol (designer)
      status: "complete",
      priority: "high",
      dueDate: new Date("2024-09-30"),
      tags: ["design", "ui/ux"],
    },
    {
      id: "todo-2",
      title: "Setup backend API",
      description: "Create REST endpoints for user data",
      projectId: "project-1", // Website Redesign
      userId: "user-1", // Assigned to Alice (owner)
      status: "in-progress",
      priority: "high",
      dueDate: new Date("2024-10-15"),
      tags: ["backend", "api"],
    },
    {
      id: "todo-3",
      title: "Write content",
      description: "Homepage and about page content",
      projectId: "project-1", // Website Redesign
      userId: "user-2", // Assigned to Bob
      status: "pending",
      priority: "medium",
      dueDate: new Date("2024-10-20"),
      tags: ["content", "seo"],
    },

    // Project 2 Todos
    {
      id: "todo-4",
      title: "Design app icons",
      description: "Create app store icons and splash screen",
      projectId: "project-2", // Mobile App
      userId: "user-3", // Assigned to Carol
      status: "pending",
      priority: "medium",
      dueDate: new Date("2024-11-10"),
      tags: ["mobile", "design"],
    },
    {
      id: "todo-5",
      title: "Setup React Native",
      description: "Initialize project and development environment",
      projectId: "project-2", // Mobile App
      userId: "user-1", // Assigned to Alice
      status: "complete",
      priority: "high",
      dueDate: new Date("2024-09-25"),
      tags: ["setup", "frontend"],
    },

    // Project 3 Todos
    {
      id: "todo-6",
      title: "Create social media plan",
      description: "Outline posts and campaigns for launch",
      projectId: "project-3", // Marketing Campaign
      userId: "user-3", // Assigned to Carol (owner)
      status: "in-progress",
      priority: "medium",
      dueDate: new Date("2024-10-05"),
      tags: ["social", "planning"],
    },
  ],
};
