"use client";
import { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function FactsPage() {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
      const data = await res.json();
      //getting the fact text from the response
      setFact(data.text);
    } catch (err) {
      console.error("Failed to fetch fact:", err);
      setFact("Failed to load fact.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Fun Fact</Typography>
      <Button variant="contained" onClick={fetchFact} disabled={loading}>
        {loading ? "Loading…" : "Get a Random Fact"}
      </Button>

      {fact && (
        <Card sx={{ mt: 4, p: 2 }}>
          <CardContent>
            <Typography>{fact}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>    
    );
}
