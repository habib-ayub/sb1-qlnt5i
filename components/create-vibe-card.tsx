"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CldUploadButton } from "next-cloudinary";
import { Image, Smile } from "lucide-react";

interface CreateVibeCardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateVibeCard({ open, onOpenChange }: CreateVibeCardProps) {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    setUploading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Your Vibe</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input placeholder="What's on your mind?" />
          </div>
          <div className="grid gap-2">
            <Textarea placeholder="Express yourself..." />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="w-full" disabled={uploading}>
              <CldUploadButton
                uploadPreset="vibeshare"
                onUpload={handleUpload}
                options={{ maxFiles: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  Add Photo
                </div>
              </CldUploadButton>
            </Button>
            <Button variant="outline" className="w-full">
              <Smile className="h-4 w-4 mr-2" />
              Mood
            </Button>
          </div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded preview"
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <Button type="submit" className="w-full">
            Share Vibe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}