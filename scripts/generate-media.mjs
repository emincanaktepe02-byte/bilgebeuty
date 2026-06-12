import { fal } from "@fal-ai/client";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

fal.config({
  credentials: process.env.FAL_KEY,
});

const IMAGE_PROMPT =
  "Luxury beauty laboratory of the future, transparent glass architecture floating in a white infinite space, liquid gold and pearl essence suspended in mid-air, ultra minimal luxury skincare branding aesthetic, soft sunlight, premium cosmetic advertisement, Dior and Chanel inspired elegance, pristine environment, cinematic lighting, luxury editorial photography, photorealistic, 8K";

const VIDEO_PROMPT =
  "The camera slowly glides through the floating luxury environment. Liquid gold and pearl essence gracefully orbit and merge. Light rays softly travel through transparent glass structures. Everything moves with refined elegance and precision. Premium luxury skincare commercial, sophisticated cinematic motion, slow camera dolly, mesmerizing atmosphere, high-end beauty campaign, luxury brand reveal.";

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;
    protocol
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          try { fs.unlinkSync(dest); } catch {}
          downloadFile(response.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        response.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        try { fs.unlinkSync(dest); } catch {}
        reject(err);
      });
  });
}

async function generateImage(index) {
  console.log(`\n🎨 Generating image ${index + 1}/3 with Nano Banana 2...`);

  const result = await fal.subscribe("fal-ai/nano-banana-2", {
    input: {
      prompt: IMAGE_PROMPT,
      aspect_ratio: "16:9",
      output_format: "png",
      safety_tolerance: "6",
      resolution: "2K",
      limit_generations: false,
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === "IN_PROGRESS") {
        const lastLog = update.logs?.[update.logs.length - 1];
        if (lastLog) process.stdout.write(`  ${lastLog.message}\r`);
      }
    },
  });

  const imageUrl =
    result.data?.images?.[0]?.url ||
    result.data?.image?.url ||
    (Array.isArray(result.data) ? result.data[0]?.url : null);

  if (!imageUrl) {
    console.log("  Response data:", JSON.stringify(result.data, null, 2));
    throw new Error(`No image URL in response for index ${index}`);
  }

  const imagePath = path.join(__dirname, `../public/images/hero-frame-${index + 1}.png`);
  await downloadFile(imageUrl, imagePath);
  console.log(`\n  ✅ Image ${index + 1} saved`);
  return { url: imageUrl, localPath: imagePath };
}

async function generateVideo(imageUrl, index) {
  console.log(`\n🎬 Converting image ${index + 1} to video with Kling 3.0 Pro...`);

  const result = await fal.subscribe("fal-ai/kling-video/v3/pro/image-to-video", {
    input: {
      start_image_url: imageUrl,
      prompt: VIDEO_PROMPT,
      duration: "5",
      cfg_scale: 0.5,
      generate_audio: false,
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === "IN_PROGRESS") {
        const lastLog = update.logs?.[update.logs.length - 1];
        if (lastLog) process.stdout.write(`  ${lastLog.message}\r`);
      }
    },
  });

  const videoUrl =
    result.data?.video?.url ||
    result.data?.url ||
    (result.data?.videos?.[0]?.url);

  if (!videoUrl) {
    console.log("  Response data:", JSON.stringify(result.data, null, 2));
    throw new Error(`No video URL in response for index ${index}`);
  }

  const videoPath = path.join(__dirname, `../public/videos/hero-video-${index + 1}.mp4`);
  await downloadFile(videoUrl, videoPath);
  console.log(`\n  ✅ Video ${index + 1} saved`);
  return videoPath;
}

async function main() {
  console.log("🚀 Starting Bilge Beauty media generation...");
  console.log("   Nano Banana 2 (image) → Kling 3.0 Pro (video)");
  console.log("=".repeat(55));

  const imageResults = [];
  for (let i = 0; i < 3; i++) {
    const result = await generateImage(i);
    imageResults.push(result);
    // Small delay between requests
    if (i < 2) await new Promise((r) => setTimeout(r, 2000));
  }

  console.log("\n🎬 Starting video generation...");
  const videoPaths = [];
  for (let i = 0; i < imageResults.length; i++) {
    const videoPath = await generateVideo(imageResults[i].url, i);
    videoPaths.push(videoPath);
    if (i < 2) await new Promise((r) => setTimeout(r, 2000));
  }

  console.log("\n" + "=".repeat(55));
  console.log("✨ All media generated successfully!");

  const manifest = {
    generatedAt: new Date().toISOString(),
    images: imageResults.map((r, i) => ({
      index: i + 1,
      url: r.url,
      local: `/images/hero-frame-${i + 1}.png`,
    })),
    videos: videoPaths.map((p, i) => ({
      index: i + 1,
      local: `/videos/hero-video-${i + 1}.mp4`,
    })),
  };

  fs.writeFileSync(
    path.join(__dirname, "../public/media-manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("📋 Manifest saved: public/media-manifest.json");
}

main().catch((err) => {
  console.error("\n❌ Error:", err.message || err);
  process.exit(1);
});
