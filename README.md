# Oracle-APEX-Advanced-Item-Features-Demo
This Oracle APEX demo application showcases several enhanced input field features using JavaScript and built-in APEX functionalities. The goal is to improve user experience, ensure accurate data entry, and apply interactive validations.
## Features & Implementation Steps
### 🔒 1. Password Strength Check
#### Validation Logic:

 * Enforces password rules: minimum length, uppercase, digit, special character

 * Provides real-time feedback (e.g., "Weak", "Strong")

 * Uses JavaScript to dynamically evaluate password strength

#### Implementation:

 * Add checkPasswordStrength.js to Function and Global Variable Declaration

 * Create a Dynamic Action (on item change) using the Password Strength Meter JavaScript logic

### 🔢 2. Number Formatting (Thousands Separator)
#### Behavior:

 * Automatically formats numeric inputs with thousand separators (e.g., 1234567 → 1,234,567)

 * For matting is applied during input for better readability

 * Optionally, separators can be removed before submission if needed

#### Implementation:

 * Add formatNumericInput.js to Function and Global Variable Declaration

 * Set item’s Custom Attributes:
   oninput="formatNumericInput(event)"

### 💡 3. Tooltip on Hover
#### Behavior:

 * Displays a tooltip when hovering over input items

 * Provides helpful guidance text to users

 * Supports both native title attribute or custom tooltip with styling

#### Implementation:

 * Use tooltip.css in the Inline CSS section

 * Add tooltip logic in Execute when Page Loads

 * For custom tooltip, set the following in item’s Custom Attributes:
   data-help-text="Sample help text"

### 📅 4. Date Range Validation
#### Validation Logic:

 * Ensures the "From Date" is earlier than or equal to the "To Date"

 * Prevents invalid date range selections

#### Implementation:

 * Use date_range_validation.js in a Dynamic Action on both from_date and to_date items

## 🧪 Technologies Used
 * Oracle APEX (low-code platform)

 * JavaScript

 * HTML & CSS

## 💼 Use Case
 This project is intended for APEX developers who want to:

 Enhance item interactions in Oracle APEX forms

 Implement real-time validations and improved UI/UX for users

 Learn how to integrate custom JavaScript behaviors into APEX pages



![Button Preview](./preview.png)
