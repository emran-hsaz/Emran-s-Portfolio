import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error: any) {
      if (error?.name === "ZodError") {
        const fieldErrors: Record<string, string[]> = {};
        const formErrors: string[] = [];
        
        error.issues?.forEach((issue: any) => {
          const field = issue.path?.[0];
          if (field) {
            if (!fieldErrors[field]) {
              fieldErrors[field] = [];
            }
            fieldErrors[field].push(issue.message);
          } else {
            formErrors.push(issue.message);
          }
        });
        
        res.status(400).json({
          success: false,
          message: "Validation failed",
          fieldErrors,
          formErrors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message",
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      const resumePath = path.join(
        __dirname,
        "..",
        "attached_assets",
        "Emran Abdalla DevOps Engineer_1763746120645.pdf"
      );
      
      res.download(resumePath, "Emran_Abdalla_DevOps_Engineer_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({
            success: false,
            message: "Failed to download resume",
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to download resume",
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({
        success: true,
        data: messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve messages",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
