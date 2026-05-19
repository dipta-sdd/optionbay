# Checkboxes (Multiple)

A group of independent `<input type="checkbox">` elements. Customers can tick any combination of options (zero, one, or many).

![A multi-checkbox group showing four add-on options, two of which are ticked, each with a price badge](../../public/img/field-checkboxes-frontend.png)

---

## When to Use

- "Add-on accessories": Carrying Case (+$10), Screen Protector (+$5), Warranty (+$20)
- "Dietary extras" for food orders
- "Optional services": Installation, Assembly, White-glove delivery
- Any scenario where multiple selections are allowed (unlike Radio Buttons, which only allow one).

---

## Configuration Settings

When you add a Checkboxes field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for Checkboxes field](../../public/img/field-checkboxes-general.png)

- **Label:** The main heading shown above the entire group of checkboxes. Used to identify the field group in the cart and order details.
- **Description:** Additional helper text shown below the group. Useful for providing instructions (e.g. "Select all that apply").

### Options Configuration

![Backend view of Options block for Checkboxes field](../../public/img/field-checkboxes-options.png)

Instead of a single "Pricing" tab, pricing and data are configured on a per-option basis within the main **Options** block. For each choice row you add, you can configure:

- **Label:** The text displayed next to the individual checkbox.
- **Value:** The internal, system-friendly value submitted to the server (e.g., `carrying-case`).
- **Price Type:** Choose how this specific option is priced (None, Flat Fee, Percentage, Math Formula).
- **Price Amount:** The amount charged when this specific option is ticked.
- **Weight:** The shipping weight added to the order when this specific option is ticked.

### Validation

![Backend view of Validation settings for Checkboxes field](../../public/img/field-checkboxes-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to tick **at least one** option from the group before they are allowed to add the product to their cart.

---

## Conditions

![Backend view of Conditions tab for Checkboxes field](../../public/img/field-checkboxes-conditions.png)

Open the **Conditions** tab to dynamically show or hide this entire group of checkboxes based on what the customer has selected in other fields. 

**Available Inputs:**
- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to *Show* or *Hide* this field when conditions are met.
- **Match Type:** Choose *ALL* (every rule must match) or *ANY* (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

*Example:* Show the "Add-on Accessories" checkboxes only if the customer selects a specific laptop model from a Select Dropdown.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Checkboxes field](../../public/img/field-checkboxes-stock.png)

Because a Checkboxes field contains multiple distinct options, stock is linked **per option** instead of for the whole field. 

Open the **Stock** tab to link individual choices to their respective inventory pools.

**Available Inputs:**
- **Enable Stock Management:** Toggle to activate inventory tracking.
- **Per-Option Links:** You will see a row for every option you created. For each row, you can select an existing Global Stock Item and define the Reduction Mode (Per Item Quantity, Per Line Item, or Formula).

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selling optional laptop accessories**. You want to let customers add multiple accessories to their order.

You would configure the Checkboxes field like this:
- **Label:** `Add-on Accessories`
- **Description:** `Select any extra items you'd like included in the box.`
- **Option 1:** Label `Carrying Case`, Price Type `Flat Fee`, Price Amount `25.00`
- **Option 2:** Label `Screen Protector`, Price Type `Flat Fee`, Price Amount `15.00`
- **Option 3:** Label `Extended Warranty`, Price Type `Percentage`, Price Amount `10`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![A multi-checkbox group showing four add-on options, two of which are ticked, each with a price badge](../../public/img/field-checkboxes-frontend.png)

When a customer ticks multiple boxes and adds the product to their cart, OptionBay validates that every submitted value exists in the predefined allowed options list (preventing tampering). 

**Cart & WooCommerce Order View:**
The field label and a comma-separated list of the selected option labels will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
Add-on Accessories:   Carrying Case, Screen Protector
```
