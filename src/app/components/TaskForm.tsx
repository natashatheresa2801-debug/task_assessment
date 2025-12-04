"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

type TaskFormProps = {
  onAddTask: (task: { name: string; type: string; status: string }) => void;
};

type FormValues = {
  name: string;
  type: string;
  status: string;
};

// Yup validation
const schema = yup.object({
  name: yup.string().required("Task name is required"),
  type: yup.string().required("Task type is required"),
  status: yup.string().required("Status is required"),
}).required();

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", type: "", status: "Todo" },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onAddTask(data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3, border: "1px solid #ddd", borderRadius: 2, boxShadow: 2, backgroundColor: "#fafafa" }}
    >
      <TextField
        label="Task Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Task Type"
        {...register("type")}
        error={!!errors.type}
        helperText={errors.type?.message}
      />
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select {...register("status")} defaultValue="Todo">
          <MenuItem value="Todo">Todo</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </Box>
  );
}
