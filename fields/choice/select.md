# Select Dropdown

A native HTML `<select>` dropdown — customers pick **one option** from a collapsed list. Best when you have many choices and want to save vertical space on the product page.

![A Select Dropdown field on a WooCommerce product page, dropdown open showing price-labelled options](../../public/img/field-select-frontend.png)

---

## When to Use

- Size or capacity selections (e.g. 16GB, 32GB, 64GB)
- Turnaround time or service level selection (e.g. Standard, Rush, Express)
- Dropdown menus with 4+ options where open radio buttons would feel cluttered
- Any single-choice decision that needs to fit into a compact space

---

## Configuration Settings

When you add a Select field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for Select field](../../public/img/field-select-general.png)

- **Label:** The text heading displayed above the dropdown. Used to identify the field in the cart and order details.
- **Description:** Additional helper text shown below the dropdown. Useful for providing instructions.
- **Placeholder:** The default "—Choose an option—" text shown inside the dropdown before a selection is made. Customize it here (e.g. "Select your RAM size…").

### Options Configuration

![Backend view of Options block for Select field](../../public/img/field-select-options.png)

Within the main **Options** block, you define the actual dropdown choices. For each row you add, you can configure:

- **Label:** The text displayed inside the dropdown menu (e.g. `16GB RAM`). Shown in the cart, orders, and to the customer.
- **Value:** The internal, system-friendly value submitted to the server (e.g., `16gb`). No spaces recommended.
- **Price Type:** Choose how this specific option is priced (None, Flat Fee, Percentage, Math Formula).
- **Price Amount:** The surcharge or discount applied when this specific choice is selected.
- **Weight:** The shipping weight added when this specific option is selected.

### Validation

![Backend view of Validation settings for Select field](../../public/img/field-select-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to pick a valid option (they cannot submit the form if the Placeholder is still selected).

::: tip Placeholder Rendering
OptionBay automatically renders your placeholder text as the first, disabled `<option>` in the HTML dropdown list.
:::

---

## Pricing Logic

![Backend view of Pricing settings for Select field](../../public/img/field-select-pricing.png)

You can charge a fee globally for the field, or individually per option. 

**Per-Option Pricing:** (Recommended) Set specific price deltas on individual choices (e.g. "+$100 for 32GB") inside the Options block.

**Field-Level Pricing:** Open the **Pricing** tab to set a flat charge that applies *no matter which option is selected*. 
- **Price Type:** (None, Flat Fee, Percentage, Math Formula).
- **Price Amount / Formula Expression:** The fee applied when any non-empty option is chosen.

::: info Master the Pricing Engine
OptionBay includes five different pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for Select field](../../public/img/field-select-conditions.png)

Open the **Conditions** tab to dynamically show or hide this dropdown based on what the customer has selected in other fields. 

**Available Inputs:**
- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to *Show* or *Hide* this field when conditions are met.
- **Match Type:** Choose *ALL* (every rule must match) or *ANY* (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

*Example:* Show the "Engraving Font" dropdown only if the customer checked the "Add Engraving" checkbox.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Select field](../../public/img/field-select-stock.png)

Because a Select field contains multiple distinct options, stock is typically linked **per option** instead of for the whole field. 

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

To see how this comes together, let's look at a common scenario: **Selecting RAM size for a custom PC**. You want customers to pick one RAM size, and charge a different price based on what they choose.

You would configure the Select field like this:
- **Label:** `RAM Capacity`
- **Placeholder:** `Choose memory size...`
- **Option 1:** Label `16GB (Included)`, Price Type `None`
- **Option 2:** Label `32GB`, Price Type `Flat Fee`, Price Amount `100.00`
- **Option 3:** Label `64GB`, Price Type `Flat Fee`, Price Amount `250.00`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![A Select Dropdown field on a WooCommerce product page, dropdown open showing price-labelled options](../../public/img/field-select-frontend.png)

When a customer makes a selection and adds the product to their cart, OptionBay validates that the submitted value exactly matches one of the allowed options you defined, preventing malicious injections.

**Cart & WooCommerce Order View:**
The field label and the text label of the chosen option (not the system value) will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
RAM Capacity:   32GB
```
