# Reusable Components Guide

This guide demonstrates the proper way to use reusable components with props in the Sque.ai landing page project.

## 🎯 Principles of Reusable Components

1. **Props-based Configuration**: Components should accept props to customize their behavior and appearance
2. **Single Responsibility**: Each component should have one clear purpose
3. **Composition over Inheritance**: Build complex components by combining simpler ones
4. **Consistent API**: Similar components should have similar prop interfaces
5. **Type Safety**: Use TypeScript interfaces for all props

## 📦 Available Reusable Components

### Button Component

```tsx
import Button from "./ui/Button";

// Basic usage
<Button>Click me</Button>

// With props
<Button 
  variant="primary" 
  size="lg" 
  className="custom-class"
  onClick={() => console.log('clicked')}
>
  Start now
  <Icon name="arrowRight" size="sm" className="ml-2" />
</Button>
```

**Props:**
- `variant`: "primary" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"
- `className`: string (additional CSS classes)
- `onClick`: () => void
- `href`: string (renders as link)
- `disabled`: boolean

### Input Component

```tsx
import Input from "./ui/Input";

// Basic usage
<Input placeholder="Enter email" />

// With validation and label
<Input
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  required
  error={hasError}
  errorMessage="Please enter a valid email"
  helperText="We'll never share your email"
  size="lg"
  variant="filled"
/>
```

**Props:**
- `type`: "text" | "email" | "password" | "number" | "tel" | "url"
- `placeholder`: string
- `label`: string
- `size`: "sm" | "md" | "lg"
- `variant`: "default" | "filled" | "outline"
- `error`: boolean
- `errorMessage`: string
- `helperText`: string

### Card Component

```tsx
import Card from "./ui/Card";

// Basic usage
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// With custom styling
<Card className="hover:shadow-lg transition-shadow">
  <div className="p-6">
    <h3>Featured Card</h3>
    <p>This card has custom styling</p>
  </div>
</Card>
```

### Icon Component

```tsx
import Icon from "./ui/Icon";

// Basic usage
<Icon name="arrowRight" />

// With size and styling
<Icon 
  name="check" 
  size="lg" 
  className="text-green-500" 
  color="#10b981"
/>
```

**Available Icons:**
- `arrowRight`, `chevronDown`, `check`, `star`
- `user`, `globe`, `shield`, `code`
- `play`, `external`

### Badge Component

```tsx
import Badge from "./ui/Badge";

// Basic usage
<Badge>New</Badge>

// With variant and size
<Badge variant="success" size="lg">
  Completed
</Badge>
```

**Props:**
- `variant`: "default" | "success" | "warning" | "error" | "info"
- `size`: "sm" | "md" | "lg"

### Section Component

```tsx
import Section from "./ui/Section";

// Basic usage
<Section>
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>

// With background and padding
<Section 
  background="gradient" 
  padding="xl"
  className="relative overflow-hidden"
>
  <h2>Hero Section</h2>
</Section>
```

**Props:**
- `background`: "white" | "gray" | "dark" | "gradient"
- `padding`: "sm" | "md" | "lg" | "xl"
- `id`: string
- `ariaLabelledby`: string

### Header Component

```tsx
import Header from "./ui/Header";

// Basic usage
<Header />

// With custom navigation and actions
<Header
  logo={{ text: "Sque", icon: "S", href: "/" }}
  navigation={[
    { label: "Products", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Resources" }
  ]}
  actions={[
    { label: "Sign in", variant: "outline" },
    { label: "Contact sales", variant: "primary" }
  ]}
/>
```

## 🔧 Best Practices

### 1. Always Use Props for Customization

❌ **Wrong - Hardcoded values:**
```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

✅ **Correct - Using reusable component:**
```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

### 2. Compose Complex Components

❌ **Wrong - Monolithic component:**
```tsx
const HeroSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h1>Title</h1>
      <p>Description</p>
      <button>CTA Button</button>
    </div>
  </section>
);
```

✅ **Correct - Composed with reusable components:**
```tsx
const HeroSection = () => (
  <Section background="white" padding="lg">
    <h1>Title</h1>
    <p>Description</p>
    <Button variant="primary" size="lg">
      CTA Button
      <Icon name="arrowRight" size="sm" className="ml-2" />
    </Button>
  </Section>
);
```

### 3. Use TypeScript Interfaces

```tsx
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  variant?: "default" | "highlighted";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  variant = "default"
}) => {
  return (
    <Card className={variant === "highlighted" ? "border-blue-500" : ""}>
      <Icon name={icon} size="lg" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button variant="primary">{buttonText}</Button>
    </Card>
  );
};
```

### 4. Provide Sensible Defaults

```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  // ... other props
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",  // Default value
  size = "md",          // Default value
  disabled = false,     // Default value
  // ... other props
}) => {
  // Component implementation
};
```

### 5. Use Composition for Complex UI

```tsx
const PricingCard = ({ plan, features, price }) => (
  <Card className="p-6 text-center">
    <Badge variant="success" className="mb-4">
      {plan.badge}
    </Badge>
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <p className="text-gray-600 mb-4">{plan.description}</p>
    <div className="text-4xl font-bold mb-6">{price}</div>
    <Button variant="primary" size="lg" className="w-full mb-6">
      Get Started
      <Icon name="arrowRight" size="sm" className="ml-2" />
    </Button>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Icon name="check" size="sm" className="text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </Card>
);
```

## 🚀 Example: Refactored Hero Component

Here's how the Hero component properly uses reusable components:

```tsx
import Button from "./ui/Button";
import Input from "./ui/Input";
import Icon from "./ui/Icon";
import Section from "./ui/Section";

const Hero = () => (
  <Section className="relative overflow-hidden min-h-screen" background="gradient">
    <Header
      logo={{ text: "sque", icon: "S" }}
      navigation={[
        { label: "Products", hasDropdown: true },
        { label: "Solutions", hasDropdown: true },
        { label: "Resources" }
      ]}
      actions={[
        { label: "Contact sales", variant: "outline" }
      ]}
    />
    
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-6">
          Customer insights at the speed of AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build better products with AI-powered research workflows
        </p>
        <div className="flex gap-4">
          <Button variant="primary" size="lg">
            Start now
            <Icon name="arrowRight" size="sm" className="ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            View demo
            <Icon name="play" size="sm" className="ml-2" />
          </Button>
        </div>
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="Email address"
          size="md"
          className="mb-4"
        />
        <Button variant="secondary" size="md" className="w-full">
          Get started
          <Icon name="arrowRight" size="sm" className="ml-2" />
        </Button>
      </div>
    </div>
  </Section>
);
```

## 📝 Summary

- **Use props** to customize component behavior and appearance
- **Compose** complex components from simpler reusable ones
- **Provide defaults** for optional props
- **Use TypeScript** for type safety
- **Follow consistent patterns** across similar components
- **Document** component APIs and usage examples

This approach makes the codebase more maintainable, consistent, and easier to work with!
