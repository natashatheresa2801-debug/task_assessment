"use client";

import { useTasks } from "../context/TaskContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const STATUS_COLORS: { [key: string]: string } = {
  Pending: "#FFD700",
  "In Progress": "#00BFFF",
  Completed: "#32CD32",
};

export default function PostsPage() {
  const { tasks, deleteTask, editTask } = useTasks();
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<{ name: string; type: string; status: string }>({
    name: "",
    type: "",
    status: "Pending",
  });

  const startEdit = (task: typeof editData & { id: number }) => {
    setEditId(task.id);
    setEditData({ name: task.name, type: task.type, status: task.status });
  };

  const submitEdit = () => {
    if (editId !== null) {
      editTask(editId, editData);
      setEditId(null);
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Tasks Overview
      </Typography>

      {tasks.length === 0 ? (
        <Typography>No tasks available.</Typography>
      ) : (
        tasks.map((task) => (
          <Card
            key={task.id}
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: STATUS_COLORS[task.status] || "#f5f5f5",
              transition: "background-color 0.3s",
            }}
          >
            <CardContent>
              {editId === task.id ? (
                <>
                  <TextField
                    label="Task Name"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    fullWidth
                    sx={{ mb: 1 }}
                  />
                  <TextField
                    label="Task Type"
                    value={editData.type}
                    onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                    fullWidth
                    sx={{ mb: 1 }}
                  />
                  <Select
                    value={editData.status}
                    onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                    fullWidth
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </>
              ) : (
                <>
                  <Typography variant="h6">{task.name}</Typography>
                  <Typography>Type: {task.type}</Typography>
                  <Typography>Status: {task.status}</Typography>
                </>
              )}
            </CardContent>
            <CardActions>
              {editId === task.id ? (
                <>
                  <Button size="small" color="primary" onClick={submitEdit}>
                    Save
                  </Button>
                  <Button size="small" color="inherit" onClick={() => setEditId(null)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button size="small" color="primary" onClick={() => startEdit(task)}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
}
