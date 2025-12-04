"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

type Task = {
  id: number;
  name: string;
  type: string;
  status: string;
};

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, updatedTask: Omit<Task, "id">) => void;
};

export default function TaskList({ tasks, onDelete, onEdit }: TaskListProps) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Omit<Task, "id">>({
    name: "",
    type: "",
    status: "Todo",
  });

  const startEdit = (task: Task) => {
    setEditId(task.id);
    setEditData({ name: task.name, type: task.type, status: task.status });
  };

  const submitEdit = () => {
    if (editId !== null) {
      onEdit(editId, editData);
      setEditId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return "#d0f0c0"; 
      case "In Progress":
        return "#ffe0b2"; 
      case "Todo":
      default:
        return "#e0e0e0"; 
    }
  };

  if (tasks.length === 0) return <Typography>No tasks yet.</Typography>;

  return (
    <>
      {tasks.map((task) => (
        <Card
          key={task.id}
          sx={{
            mb: 2,
            backgroundColor: editId === task.id ? "#fff" : getStatusColor(task.status),
          }}
        >
          <CardContent>
            {editId === task.id ? (
              <>
                <TextField
                  label="Task Name"
                  fullWidth
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  sx={{ mb: 1 }}
                />
                <TextField
                  label="Task Type"
                  fullWidth
                  value={editData.type}
                  onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                  sx={{ mb: 1 }}
                />
                <FormControl fullWidth sx={{ mb: 1 }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={editData.status}
                    label="Status"
                    onChange={(e) =>
                      setEditData({ ...editData, status: e.target.value })
                    }
                  >
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                  </Select>
                </FormControl>
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
                <Button size="small" color="error" onClick={() => onDelete(task.id)}>
                  Delete
                </Button>
              </>
            )}
          </CardActions>
        </Card>
      ))}
    </>
  );
}
