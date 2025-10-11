export const data = [
  (project = {
    id: crypto.randomUUID(),
    name: "My Project",
    todos: [
      (todo = {
        id: crypto.randomUUID(),
        title: "first todo",
        description: "first description",
        status: "pending | complete",
      }),
    ],
  }),
];
