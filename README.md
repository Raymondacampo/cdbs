# CDBS Dance Studio

A Next.js 16 design template for CDBS Dance Studio.

## Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `blush` | `#F2C9D8` | Backgrounds, accents |
| `pink` | `#E996B4` | Highlights, hover states |
| `peach` | `#F5E1DB` | Card backgrounds |
| `dark` | `#13292A` | Primary text, navbar, footer |

**Fonts:** Inter (body) · Quicksand (headings / display)

## Project Structure

```
src/
├── app/
│   ├── page.tsx               # Dashboard / Home
│   ├── layout.tsx             # Root layout (Navbar + Footer)
│   ├── globals.css            # Design tokens, heading classes
│   ├── ballet/
│   │   ├── page.tsx
│   │   ├── components/        # Page-level components
│   │   └── ui/                # Page-level UI primitives
│   ├── hiphop-jazz/
│   ├── others/
│   ├── about-us/
│   └── recital/
│       ├── page.tsx           # Store home
│       ├── [section]/         # e.g. /recital/shoes, /recital/costumes
│       ├── components/
│       └── ui/
├── components/
│   ├── Navbar.tsx             # Responsive navbar (hamburger on mobile)
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx         # Shared Button (variant, size, fullWidth)
│       └── Heading.tsx        # H1 – H5 components
public/
└── images/
    ├── dashboard/             # Place hero images here
    ├── ballet/
    ├── hiphop-jazz/
    ├── others/
    ├── about-us/
    └── recital/
```

## Getting Started

```bash
npm install
npm run dev
```

## Adding Images

Place images in `public/images/<page>/`. Then import and use them:

```tsx
import Image from "next/image";
import heroImage from "../../../public/images/ballet/hero.jpg";

<Image src={heroImage} alt="Ballet hero" fill className="object-cover" />
```

## Using Design Components

```tsx
import { H1, H2 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

<H1>My Title</H1>
<Button variant="outline" size="lg">Click me</Button>
<Button variant="ghost">Ghost</Button>
```
