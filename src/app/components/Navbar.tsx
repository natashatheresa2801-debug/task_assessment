"use client";

import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        <Link href="/" passHref>
          <Button variant="contained" color="secondary">Home</Button>
        </Link>

        <Link href="/about" passHref>
          <Button variant="contained" color="secondary">About</Button>
        </Link>

        <Link href="/posts" passHref>
          <Button variant="contained" color="secondary">Posts</Button>
        </Link>

        <Link href="/tasks" passHref>
          <Button variant="contained" color="secondary">Tasks</Button>
        </Link>

        <Link href="/facts" passHref>
          <Button variant="contained" color="secondary">Facts</Button>
        </Link>

      </Toolbar>
    </AppBar>
  );
}
