# A-Level Accounting Notes

## 1. THE ACCOUNTING EQUATION

### Core Principle
> **Assets = Capital + Liabilities**

Or rearranged:
> **Assets - Liabilities = Capital (Net Assets)**

| Term | Definition |
|------|------------|
| **Assets** | Resources owned/controlled by the business that provide future economic benefit |
| **Liabilities** | Amounts owed to external parties (creditors) |
| **Capital** | Owner's investment / equity in the business |

### The Expanded Accounting Equation
```
Assets = Capital + (Profit - Drawings) + Liabilities
```

---

## 2. DOUBLE ENTRY BOOKKEEPING

### The Golden Rule
> Every transaction has **dual effect** — debit one account, credit another.

### Debit/Credit Rules

| Account Type | Debit (DR) | Credit (CR) |
|-------------|------------|-------------|
| **Assets** | Increase | Decrease |
| **Liabilities** | Decrease | Increase |
| **Income/Revenue** | Decrease | Increase |
| **Expenses** | Increase | Decrease |
| **Capital** | Decrease | Increase |

### Quick Mnemonic
> **DEAD CLIC**
- **D**ebits: **E**xpenses, **A**ssets, **D**rawings
- **C**redits: **L**iabilities, **I**ncome, **C**apital

---

## 3. SOURCE DOCUMENTS → BOOKS OF PRIME ENTRY

| Document | Book of Prime Entry | Why |
|----------|---------------------|-----|
| Invoice received | Purchases Day Book | Credit purchases |
| Invoice sent | Sales Day Book | Credit sales |
| Credit note received | Purchases Returns Book | Goods returned to supplier |
| Credit note sent | Sales Returns Book | Goods returned by customer |
| Cheque counterfoil | Cash Book | Payments made |
| Paying-in slip | Cash Book | Cash/bank receipts |
| Petty cash voucher | Petty Cash Book | Small expenses |

---

## 4. THE CASH BOOK

### Two-Column Cash Book (Cash + Bank)

| Date | Details | Disc. | Cash | Bank | Date | Details | Disc. | Cash | Bank |
|------|---------|-------|------|------|------|---------|-------|------|------|
| | | | | | | | | | |

### Three-Column Cash Book (with Discount)
- **Discount Allowed** (left side) — given to customers for early payment
- **Discount Received** (right side) — received from suppliers for early payment

### Bank Reconciliation Statement
**Reasons for differences between Cash Book and Bank Statement:**
1. Unpresented cheques — issued but not yet cashed
2. Lodgements not yet credited — paid in but not cleared
3. Bank charges/interest — not yet recorded in cash book
4. Standing orders/direct debits — not yet recorded
5. Errors in cash book or bank statement

**Steps:**
1. Update cash book for items appearing on bank statement only
2. Compare adjusted cash book balance to bank statement
3. Prepare reconciliation statement

> **Adjusted Cash Book Balance + Unpresented Cheques - Lodgements Not Credited = Bank Statement Balance**

---

## 5. PETTY CASH BOOK (IMPREST SYSTEM)

### The Imprest Principle
> Petty cash is maintained at a fixed amount. When replenished, the exact amount spent is reimbursed.

```
Imprest Amount:        $200
Amount Spent:          -$145
Cash Remaining:        $55
Amount Reimbursed:     $145
New Balance:           $200
```

### Analytical Petty Cash Book
Columns for different expense categories: postage, stationery, travel, cleaning, etc.

---

## 6. THE GENERAL LEDGER & TRIAL BALANCE

### General Ledger Accounts
- Each account has debit (left) and credit (right) side
- Balances are extracted and transferred to Trial Balance

### Trial Balance
> A list of all general ledger balances at a specific date to check arithmetical accuracy.

```
                    DEBIT ($)    CREDIT ($)
Sales                            50,000
Purchases           30,000
Rent                5,000
Wages               8,000
Equipment           15,000
Bank Loan                        10,000
Capital                          20,000
Drawings            2,000
Debtors             12,000
Creditors                        8,000
                    -------      -------
TOTALS              72,000       72,000
```

**Limitations:** Trial balance does not detect:
- Errors of omission (transaction completely missed)
- Errors of commission (correct amount, wrong account)
- Errors of principle (wrong category of account)
- Compensating errors (two errors cancel out)
- Complete reversal of entries
- Original entry errors (wrong amount in books of prime entry)

---

## 7. CONTROL ACCOUNTS

### Purpose
> To verify the accuracy of the sales and purchases ledgers by checking against total figures.

### Sales Ledger Control Account

| DEBIT ($) | | CREDIT ($) |
|-----------|---|------------|
| Balance b/d (debtors) | | Balance b/d (credit balances) |
| Credit sales (SDB total) | | Cash/cheques received |
| Dishonoured cheques | | Discounts allowed |
| Interest charged | | Sales returns (SRB total) |
| | | Bad debts written off |
| | | Set-offs (contra) |
| | | Balance c/d |

### Purchases Ledger Control Account

| DEBIT ($) | | CREDIT ($) |
|-----------|---|------------|
| Balance b/d (debit balances) | | Balance b/d (creditors) |
| Cash/cheques paid | | Credit purchases (PDB total) |
| Discounts received | | Dishonoured cheques |
| Purchases returns (PRB total) | | Interest charged |
| Set-offs (contra) | | |
| Balance c/d | | |

---

## 8. DEPRECIATION

### Why Depreciate?
> To match the cost of a non-current asset against the revenue it generates over its useful life (Matching Concept).

### Methods

#### Straight-Line Method
```
Annual Depreciation = (Cost - Residual Value) / Useful Life (years)
```
- Constant charge each year
- Best when equal benefit each year

#### Reducing Balance Method
```
Annual Depreciation = Net Book Value x Depreciation Rate
```
- Higher charge in early years
- Best when more benefit/repairs in early years

### Depreciation Policy (IAS 16)
- **Cost:** Purchase price + directly attributable costs
- **Residual Value:** Estimated disposal value at end of useful life
- **Useful Life:** Period over which asset is expected to be used
- **Net Book Value (NBV):** Cost - Accumulated Depreciation

### Ledger Entries
```
DR Depreciation Expense (P&L)
    CR Accumulated Depreciation (Balance Sheet)
```

### Disposal of Non-Current Assets

| Step | Action |
|------|--------|
| 1 | Remove original cost: DR Disposal, CR Asset Account |
| 2 | Remove accumulated depreciation: DR Accumulated Depreciation, CR Disposal |
| 3 | Record sale proceeds: DR Bank, CR Disposal |
| 4 | Calculate profit/loss on disposal |

> **Profit on Disposal:** Sale proceeds > NBV
> **Loss on Disposal:** Sale proceeds < NBV

---

## 9. BAD DEBTS & PROVISIONS

### Bad Debts
> Debts that are definitely irrecoverable.

```
DR Bad Debts (P&L Expense)
    CR Debtor's Account (Sales Ledger)
```

### Bad Debts Recovered
```
DR Bank
    CR Bad Debts Recovered (P&L Income)
```

### Provision for Doubtful Debts
> An estimate of debts likely to become bad (prudence concept).

**Methods:**
- % of debtors
- % of debtors aged > specific period
- Specific customer assessment

```
Increase in provision:
DR Provision for Doubtful Debts (P&L)
    CR Provision for Doubtful Debts (BS)

Decrease in provision:
DR Provision for Doubtful Debts (BS)
    CR Provision for Doubtful Debts (P&L)
```

> Debtors shown in Balance Sheet: **Trade Debtors - Provision for Doubtful Debts**

---

## 10. FINANCIAL STATEMENTS

### Income Statement (Profit & Loss Account)

```
Revenue (Sales)                                  XXXX
Less: Sales Returns                              (XX)
                                                 ----
NET SALES                                        XXXX
Less: Cost of Sales:
  Opening Inventory                               XXX
  Add: Purchases                                 XXXX
  Less: Purchases Returns                         (XX)
  Add: Carriage Inwards                            XX
                                                 ----
  Goods Available                                XXXX
  Less: Closing Inventory                        (XXX)
                                                 ----
COST OF SALES                                    (XXX)
                                                 ----
GROSS PROFIT                                     XXXX
Add: Other Income (discounts received, rent)      XXX
                                                 ----
                                                 XXXX
Less: Expenses:
  Wages & Salaries                               (XXX)
  Rent & Rates                                   (XXX)
  Insurance                                      (XXX)
  Depreciation                                   (XXX)
  Bad Debts                                      (XXX)
  Increase in Provision for Doubtful Debts       (XXX)
  Carriage Outwards                              (XXX)
  Other operating expenses                       (XXX)
                                                 ----
NET PROFIT / (LOSS)                              XXXX
```

### Statement of Financial Position (Balance Sheet)

```
NON-CURRENT ASSETS                        Cost    Acc. Dep.    NBV
Property                                XXXX      (XXX)      XXXX
Plant & Machinery                       XXXX      (XXX)      XXXX
Fixtures & Fittings                     XXXX      (XXX)      XXXX
                                                     --------
TOTAL NON-CURRENT ASSETS                                          XXXX

CURRENT ASSETS
Inventory                                                         XXX
Trade Receivables (Debtors)              XXX
Less: Provision for Doubtful Debts       (XX)                     XXX
Prepayments                                                        XX
Bank/Cash                                                         XXX
                                                     --------
TOTAL CURRENT ASSETS                                              XXXX
                                                     --------
TOTAL ASSETS                                                      XXXX

CURRENT LIABILITIES
Trade Payables (Creditors)                                        (XXX)
Accruals                                                          (XXX)
Bank Overdraft                                                    (XXX)
Short-term loans                                                  (XXX)
                                                     --------
NET CURRENT ASSETS / WORKING CAPITAL                              XXX
                                                     --------
TOTAL ASSETS LESS CURRENT LIABILITIES                             XXXX

NON-CURRENT LIABILITIES
Long-term loans                                                   (XXX)
Mortgage                                                          (XXX)
                                                     --------
NET ASSETS                                                        XXXX

FINANCED BY:
Capital (Opening)                                                 XXXX
Add: Net Profit                                                    XXX
Less: Drawings                                                    (XXX)
                                                     --------
Capital (Closing)                                                 XXXX

(or for limited companies: Share Capital + Reserves)
```

---

## 11. ADJUSTMENTS TO FINAL ACCOUNTS

### Accruals (Owed/Outstanding)
> Expense incurred but not yet paid.

```
DR Expense Account (P&L — add to amount paid)
    CR Accruals (Balance Sheet — current liability)
```

### Prepayments (Paid in Advance)
> Expense paid but not yet incurred.

```
DR Prepayments (Balance Sheet — current asset)
    CR Expense Account (P&L — deduct from amount paid)
```

### Accrued Income
> Income earned but not yet received.

```
DR Accrued Income (Balance Sheet — current asset)
    CR Income Account (P&L — add to amount received)
```

### Income Received in Advance
> Income received but not yet earned.

```
DR Income Account (P&L — deduct from amount received)
    CR Income Received in Advance (Balance Sheet — current liability)
```

---

## 12. PARTNERSHIP ACCOUNTS

### Partnership Agreement (Deed) Contents
- Profit/loss sharing ratio
- Capital contributions
- Interest on capital
- Partner salaries
- Interest on drawings

### Appropriation Account

```
Net Profit brought down                                        XXXX
Less: Interest on Drawings:
  Partner A                                                      XX
  Partner B                                                      XX
                                                               ----
                                                               XXXX
Add: Interest on Capital:
  Partner A                                                      XX
  Partner B                                                      XX
  Partner Salaries:
  Partner A                                                     XXX
  Partner B                                                     XXX
                                                               ----
Residual Profit                                                XXXX
Shared in PSR:
  Partner A (e.g., 60%)                                        XXXX
  Partner B (e.g., 40%)                                        XXXX
                                                               ----
                                                               XXXX
```

### Current Accounts

| Partner A Current Account | | |
|---------------------------|---|---|
| **DR** | | **CR** |
| Drawings | XXX | Balance b/d | XXX |
| Interest on Drawings | XX | Interest on Capital | XX |
| Balance c/d | XXX | Salary | XXX |
| | | Share of Profit | XXX |

### Goodwill
> The value of a business over and above its net assets; reputation, customer base, brand.

**Goodwill arises when:**
- A new partner joins
- A partner retires/dies
- Partnership changes profit sharing ratio

**Accounting for Goodwill:**
1. **Create:** Debit Goodwill, Credit Old Partners in Old Ratio
2. **Written off:** Debit All Partners in New Ratio, Credit Goodwill

---

## 13. LIMITED COMPANY ACCOUNTS

### Types of Shares
- **Ordinary Shares:** Variable dividend, voting rights, last in liquidation
- **Preference Shares:** Fixed dividend, no voting rights, priority in dividends/liquidation

### Types of Capital
- **Authorized/Issued Share Capital:** Maximum/actual shares issued
- **Called-up Capital:** Amount requested from shareholders
- **Paid-up Capital:** Amount actually received

### Reserves
| Reserve | Source | Usage |
|---------|--------|-------|
| **Share Premium** | Excess over nominal value on share issue | Bonus issues, expenses of issue |
| **General Reserve** | Appropriation of profit | Any purpose |
| **Retained Earnings** | Accumulated profits | Dividends, reinvestment |
| **Revaluation Reserve** | Upward revaluation of assets | Maintain replacement cost |

### Dividends
- **Interim Dividend:** Paid during the year
- **Final Dividend:** Proposed at year-end, paid after approval

### Company Income Statement

```
Revenue                                                        XXXX
Cost of Sales                                                  (XXX)
                                                               ----
Gross Profit                                                   XXXX
Operating Expenses                                             (XXX)
                                                               ----
Operating Profit                                               XXXX
Finance Costs (Interest)                                       (XXX)
                                                               ----
Profit Before Tax                                              XXXX
Taxation                                                       (XXX)
                                                               ----
Profit After Tax                                               XXXX
                                                               ----
Dividends: Interim    (XXX)
           Final      (XXX)                                    (XXX)
                                                               ----
RETAINED PROFIT FOR THE YEAR                                    XXX
Retained Earnings b/f                                          XXXX
                                                               ----
Retained Earnings c/f                                          XXXX
```

### Company Statement of Financial Position

```
ASSETS
Non-Current Assets                                             XXXX
Current Assets                                                 XXXX
                                                               ----
TOTAL ASSETS                                                   XXXX

EQUITY & LIABILITIES
Equity:
  Ordinary Share Capital                                       XXXX
  Preference Share Capital                                      XXX
  Share Premium                                                 XXX
  Revaluation Reserve                                           XXX
  General Reserve                                               XXX
  Retained Earnings                                            XXXX
                                                               ----
TOTAL EQUITY                                                   XXXX

Non-Current Liabilities                                        XXXX
Current Liabilities                                            XXXX
                                                               ----
TOTAL EQUITY & LIABILITIES                                     XXXX
```

---

## 14. RATIO ANALYSIS

### Profitability Ratios

| Ratio | Formula | Meaning |
|-------|---------|---------|
| **Gross Profit Margin** | (Gross Profit / Revenue) × 100 | % of sales that is gross profit |
| **Operating Profit Margin** | (Operating Profit / Revenue) × 100 | % of sales that is operating profit |
| **Net Profit Margin** | (Net Profit / Revenue) × 100 | % of sales that is net profit |
| **Return on Capital Employed (ROCE)** | (Operating Profit / Capital Employed) × 100 | Efficiency of capital usage |
| **Return on Equity (ROE)** | (Net Profit / Shareholders' Equity) × 100 | Return to shareholders |

> **Capital Employed = Total Assets - Current Liabilities = Equity + Non-Current Liabilities**

### Liquidity Ratios

| Ratio | Formula | Ideal | Meaning |
|-------|---------|-------|---------|
| **Current Ratio** | Current Assets / Current Liabilities | 1.5 - 2.0 | Can short-term debts be met? |
| **Acid Test (Quick Ratio)** | (Current Assets - Inventory) / Current Liabilities | 0.8 - 1.0 | Can debts be met without selling inventory? |

### Efficiency Ratios

| Ratio | Formula | Meaning |
|-------|---------|---------|
| **Inventory Turnover** | Cost of Sales / Average Inventory | How often inventory is sold/replaced |
| **Inventory Days** | (Average Inventory / Cost of Sales) × 365 | Days inventory held |
| **Trade Receivables Days** | (Trade Receivables / Revenue) × 365 | Average collection period |
| **Trade Payables Days** | (Trade Payables / Cost of Sales) × 365 | Average payment period |
| **Asset Turnover** | Revenue / Total Assets | Sales generated per $ of assets |
| **Non-Current Asset Turnover** | Revenue / Non-Current Assets | Sales per $ of long-term assets |

### Gearing Ratio

| Ratio | Formula | Interpretation |
|-------|---------|----------------|
| **Gearing** | (Non-Current Liabilities / Capital Employed) × 100 | % of capital from debt |
| **Debt-to-Equity** | Non-Current Liabilities / Equity | Debt relative to equity |

> **High gearing = more risk, but potentially higher returns**
> **Low gearing = safer, but may miss growth opportunities**

### Investor Ratios

| Ratio | Formula | Meaning |
|-------|---------|---------|
| **Earnings Per Share (EPS)** | (Net Profit - Preference Dividends) / Number of Ordinary Shares | Profit per share |
| **Price-Earnings Ratio (P/E)** | Market Price per Share / EPS | Market confidence in future earnings |
| **Dividend Per Share (DPS)** | Total Ordinary Dividends / Number of Shares | Dividend paid per share |
| **Dividend Yield** | (DPS / Market Price) × 100 | Return from dividends |
| **Dividend Cover** | EPS / DPS | How many times profit covers dividend |

---

## 15. COST ACCOUNTING

### Classification of Costs

| By Nature | By Function | By Behaviour |
|-----------|-------------|--------------|
| Materials | Production | Fixed |
| Labour | Administration | Variable |
| Expenses | Selling & Distribution | Semi-variable |
| | Finance | Stepped |

### Inventory Valuation Methods

#### FIFO (First In, First Out)
> Assumes oldest inventory is sold first.
- Closing inventory valued at most recent prices
- During inflation: lower COGS, higher profit, higher tax

#### LIFO (Last In, First Out)
> Assumes newest inventory is sold first.
- Closing inventory valued at oldest prices
- During inflation: higher COGS, lower profit, lower tax

#### AVCO (Weighted Average Cost)
> Recalculates average cost after each purchase.
- Smoothes out price fluctuations

### Labour Costing

| Cost Type | Treatment |
|-----------|-----------|
| Direct wages | Direct cost of production |
| Overtime premium (general) | Production overhead |
| Overtime premium (specific job) | Direct cost of that job |
| Idle time | Production overhead / Loss |
| Bonus payments | Part of labour cost |

### Overhead Absorption

**Steps:**
1. Allocate overheads to cost centres
2. Apportion service department costs to production departments
3. Calculate overhead absorption rate (OAR)

```
OAR = Budgeted Overheads / Budgeted Activity Level
```

**Bases for Absorption:**
- Units produced
- Direct labour hours
- Machine hours
- Direct labour cost
- Direct material cost
- Prime cost

### Under/Over Absorption

```
Under-absorbed: Actual overheads > Absorbed overheads → Charge to P&L
Over-absorbed: Actual overheads < Absorbed overheads → Credit to P&L
```

---

## 16. BREAK-EVEN ANALYSIS

### Key Formulas

```
Contribution per unit = Selling Price per unit - Variable Cost per unit

Total Contribution = Total Revenue - Total Variable Costs
                   = Contribution per unit × Units Sold

Profit = Total Contribution - Fixed Costs

Break-even Point (units) = Fixed Costs / Contribution per unit

Break-even Point ($) = Fixed Costs / Contribution to Sales Ratio (C/S Ratio)

Margin of Safety (units) = Budgeted Sales - Break-even Sales

Margin of Safety (%) = (Budgeted Sales - Break-even Sales) / Budgeted Sales × 100

C/S Ratio = Contribution / Sales
```

### Break-Even Chart Components
- **Fixed Costs Line:** Horizontal line from y-axis
- **Total Costs Line:** Starts at fixed costs, slopes upward
- **Sales/Revenue Line:** Starts at origin, slopes upward
- **Break-even Point:** Intersection of total costs and sales lines
- **Margin of Safety:** Distance between actual sales and break-even
- **Angle of Incidence:** Angle between sales and total costs at BEP (wider = more profit)

### Limitations
- Assumes linear relationships (constant SP and VC)
- Assumes all production is sold
- Ignores inventory changes
- Short-term focus only
- Difficult with multiple products

---

## 17. BUDGETING

### Types of Budgets
- **Sales Budget:** Starting point — estimated sales volume and value
- **Production Budget:** Units to produce = Sales + Closing Inventory - Opening Inventory
- **Materials Usage Budget:** Materials needed for production
- **Materials Purchases Budget:** Materials to buy = Usage + Closing Stock - Opening Stock
- **Labour Budget:** Hours and cost of labour needed
- **Overhead Budget:** Production, admin, selling overheads
- **Cash Budget:** Expected cash receipts and payments
- **Master Budget:** Consolidated budgeted financial statements

### Cash Budget Format

```
                    January    February    March
                    -------    --------    -----
RECEIPTS:
Cash sales            XXX         XXX        XXX
Credit collections    XXX         XXX        XXX
Other income          XXX         XXX        XXX
                      ----        ----       ----
Total Receipts        XXXX        XXXX       XXXX

PAYMENTS:
Cash purchases        XXX         XXX        XXX
Credit payments       XXX         XXX        XXX
Wages                 XXX         XXX        XXX
Overheads             XXX         XXX        XXX
Capital expenditure   XXX         XXX        XXX
                      ----        ----       ----
Total Payments        XXXX        XXXX       XXXX

NET CASH FLOW          XXX         XXX        XXX
Opening Balance        XXX         XXX        XXX
                      ----        ----       ----
CLOSING BALANCE        XXX         XXX        XXX
```

### Flexible Budgets
> Adjusted for actual activity levels — compares like with like.

```
Variable costs: Adjust proportionally to activity change
Fixed costs: Remain unchanged
Semi-variable: Split into fixed and variable components
```

---

## 18. ACCOUNTING CONCEPTS & CONVENTIONS

### Fundamental Concepts

| Concept | Meaning | Example |
|---------|---------|---------|
| **Going Concern** | Business will continue operating | Assets valued at use value, not break-up value |
| **Accruals (Matching)** | Match revenue with expenses in same period | Record depreciation, prepayments, accruals |
| **Consistency** | Same methods year after year | Don't change depreciation method arbitrarily |
| **Prudence (Conservatism)** | Don't overstate profits/assets | Create provisions, value stock at lower of cost/NRV |

### Other Important Concepts

| Concept | Meaning |
|---------|---------|
| **Business Entity** | Business separate from owner |
| **Money Measurement** | Only record items with monetary value |
| **Historical Cost** | Record at original transaction price |
| **Realization** | Revenue recognized when earned, not when cash received |
| **Duality** | Every transaction has two effects |
| **Materiality** | Insignificant items need not follow strict rules |

---

## 19. INVENTORY VALUATION (IAS 2)

### Valuation Rule
> Inventory valued at **lower of cost and net realizable value (NRV)**

```
NRV = Expected Selling Price - Estimated Costs of Completion/Sale
```

### What is Included in Cost?
- Purchase price
- Import duties
- Transport costs (carriage inwards)
- Less: Trade discounts, rebates

### Excluded from Cost
- Administrative overheads
- Selling & distribution costs
- Abnormal waste
- Storage costs (unless necessary for production)

---

## 20. CORRECTION OF ERRORS (SUSPENSE ACCOUNT)

### When is a Suspense Account Used?
> When the trial balance doesn't balance — temporary account to make it balance while errors are found.

### Types of Errors

| Error | Effect on TB | Correction |
|-------|-------------|------------|
| **Single entry** | Doesn't balance | Complete the double entry |
| **Transposition** (e.g., 54 → 45) | Doesn't balance | Correct the amount |
| **Original entry** (wrong amount in prime book) | Balances | Journal correction |
| **Omission** | Balances | Record the transaction |
| **Commission** (wrong account, right class) | Balances | Journal: reverse + correct |
| **Principle** (wrong account class) | Balances | Journal: reverse + correct |
| **Complete reversal** | Balances | Double the correction |
| **Compensating** | Balances | Correct both errors |

### Journal Entries for Correction
```
DR Correct Account        XXX
    CR Suspense Account       XXX
(or vice versa)
```

---

## EXAM TIPS

1. **Always show your workings** — method marks available even if final answer is wrong
2. **Read the question carefully** — note dates, instructions, and what is required
3. **Format matters** — use proper financial statement layouts
4. **Double-check calculations** — especially addition and percentages
5. **Time management** — don't spend too long on one question
6. **Explain ratios** — state what they mean, not just calculate them
7. **Use the question data** — don't make up numbers
8. **Balance sheet must balance** — if it doesn't, find the error

---

*Notes prepared for A-Level Accounting examination preparation. Aligns with CAIE (Cambridge) and Edexcel syllabi.*
