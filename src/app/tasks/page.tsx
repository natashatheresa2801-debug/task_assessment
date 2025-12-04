"use client";

import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";
import { Box, Typography } from "@mui/material";

export default function TasksPage() {
  const { addTask } = useTasks();

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        Add Tasks
      </Typography>
      <TaskForm onAddTask={addTask} />
    </Box>
  );
}
