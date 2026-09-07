/**
 * FAIZA ZONE — HISAB APP
 * Complete Retail Clothing Shop POS, Inventory & Accounting System
 * Size-Wise Clothing Stock Management & Automatic Calculations
 * Offline-first, LocalStorage-backed, Bilingual (Bangla/English)
 * Fully Responsive for Mobile, Tablet, and Desktop
 */

// =========================================================
// TRANSLATION DICTIONARY
// =========================================================
const I18N = {
  bn: {
    dashboard: "ড্যাশবোর্ড",
    posBilling: "ক্যাশ মেমো / বিক্রি (POS)",
    inventory: "পণ্য ও স্টক",
    purchaseStockIn: "মাল কেনা / স্টক ইন",
    bakiKhata: "কাস্টমার ও বাকির খাতা",
    expenses: "দোকানের খরচ খাতা",
    cashFlow: "ক্যাশ রেজিস্টার / ক্যাশ হিসাব",
    salesHistory: "বিক্রির ইতিহাস ও ফেরত",
    stockMovements: "স্টক পরিবর্তন ইতিহাস",
    reports: "লাভ-ক্ষতি ও পূর্ণাঙ্গ রিপোর্ট",
    settings: "সেটিংস ও ব্যাকআপ",
    mainMenu: "প্রধান মেনু",
    operations: "অন্যান্য কার্যক্রম",
    offlineReady: "অফলাইন রেডি",
    clothingRetail: "ফ্যাশন ও ক্লথিং শপ",
    todaySale: "আজকের মোট বিক্রি",
    todayGrossProfit: "আজকের গ্রস লাভ",
    todayExpense: "আজকের খরচ",
    todayNetProfit: "আজকের নিট লাভ",
    totalCustomerDue: "মোট কাস্টমার বাকি (Due)",
    currentCashBalance: "বর্তমান ক্যাশ ব্যালেন্স",
    stockCostValue: "স্টক ক্রয়মূল্য (Cost)",
    stockSaleValue: "স্টক বিক্রয়মূল্য (Sale)",
    quickActions: "দ্রুত কাজ করুন:",
    newSale: "নতুন বিক্রি",
    addProduct: "নতুন পণ্য যোগ",
    stockIn: "মাল কেনা / স্টক ইন",
    addExpense: "খরচ এন্ট্রি",
    collectDue: "বাকি আদায়",
    openingCash: "ওপেনিং ক্যাশ",
    stockBreakdown: "প্রধান পণ্যের মজুত ও দামের হিসাব",
    lowStockAlerts: "কম স্টকের সতর্কবার্তা (Low Stock)",
    recentActivities: "সর্বশেষ কার্যক্রম (Live Feed)",
    topSellingItems: "সর্বোচ্চ বিক্রিত পণ্য",
    allCategories: "সব ক্যাটাগরি",
    allStock: "সব স্টক",
    lowStockOnly: "⚠️ কম স্টক শুধু",
    inStockOnly: "ইন স্টক",
    outOfStock: "স্টক শেষ",
    selectCustomer: "কাস্টমার নির্বাচন:",
    walkInCustomer: "🚶 সাধারণ ক্রেতা (Walk-in Customer)",
    item: "পণ্য ও সাইজ",
    qty: "পরিমাণ",
    price: "মূল্য",
    total: "মোট",
    subtotal: "সাবটোটাল:",
    discount: "ডিসকাউন্ট:",
    grandTotal: "সর্বমোট (Grand Total):",
    paymentMethod: "পেমেন্ট মেথড:",
    cash: "নগদ (Cash)",
    card: "কার্ড",
    dueBaki: "পুরো বাকি (Due)",
    splitPayment: "আংশিক নগদ/বাকি",
    paidAmount: "নগদ জমা (Paid):",
    dueAmount: "বকেয়া (Due):",
    clearCart: "ক্লিয়ার কার্ট",
    confirmSaleAndPrint: "বিক্রি সম্পন্ন ও ক্যাশ মেমো",
    productInfo: "পণ্যের নাম ও বিবরণ",
    category: "ক্যাটাগরি",
    variantsStock: "সাইজ ও ভ্যারিয়েন্ট স্টক",
    purchasePrice: "ক্রয়মূল্য",
    sellingPrice: "বিক্রয়মূল্য",
    totalStock: "মোট স্টক",
    stockCost: "স্টক খরচ",
    potentialSale: "সম্ভাব্য বিক্রয়",
    status: "স্ট্যাটাস",
    action: "অ্যাকশন",
    exportCsv: "CSV ডাউনলোড",
    addNewProduct: "নতুন পণ্য যোগ করুন",
    newStockPurchase: "নতুন মাল ক্রয় / স্টক ইন",
    purchaseId: "চালান নং (ID)",
    date: "তারিখ",
    productDetails: "পণ্য ও পরিমাণ",
    supplier: "সাপ্লায়ার",
    totalCost: "মোট ক্রয়মূল্য",
    supplierDue: "সাপ্লায়ার বাকি",
    customerName: "কাস্টমারের নাম",
    phone: "মোবাইল নম্বর",
    address: "ঠিকানা",
    totalPurchased: "মোট কেনাকাটা",
    totalPaid: "মোট পরিশোধ",
    currentDue: "বর্তমান বাকি (Due)",
    addNewCustomer: "নতুন কাস্টমার যোগ",
    allCustomers: "সব কাস্টমার",
    dueCustomersOnly: "⚠️ শুধু বকেয়া আছে এমন",
    paidCustomersOnly: "পরিশোধিত",
    expenseCategory: "খরচের খাত",
    amount: "টাকার পরিমাণ (৳)",
    paymentMethodCol: "পেমেন্ট মেথড",
    note: "বিবরণ / নোট",
    currentCashBalTitle: "বর্তমান ক্যাশ ব্যালেন্স",
    todayCashIn: "আজকের ক্যাশ ইন (Cash In)",
    todayCashOut: "আজকের ক্যাশ আউট (Cash Out)",
    cashLedger: "ক্যাশ খাতার লেনদেন বিবরণী",
    openingCashOrManual: "ওপেনিং ক্যাশ / এডজাস্ট",
    dateTime: "তারিখ ও সময়",
    type: "লেনদেনের ধরন",
    refId: "রেফারেন্স ID",
    description: "বিবরণ",
    cashIn: "ক্যাশ ইন (+)",
    cashOut: "ক্যাশ আউট (-)",
    balance: "ব্যালেন্স (৳)",
    invoiceNo: "মেমো নং",
    customer: "কাস্টমার",
    items: "পণ্য ও পরিমাণ",
    paid: "নগদ",
    due: "বাকি",
    grossProfit: "লাভ",
    stockAuditTrail: "স্টক পরিবর্তনের পূর্ণাঙ্গ অডিট হিস্টোরি",
    product: "পণ্য ও সাইজ",
    changeReason: "পরিবর্তনের কারণ",
    qtyChange: "স্টক পরিবর্তন",
    prevStock: "পূর্বের স্টক",
    newStock: "নতুন স্টক",
    stockAdjustment: "স্টক এডজাস্টমেন্ট",
    today: "আজকে",
    yesterday: "গতকাল",
    thisWeek: "চলতি সপ্তাহ",
    thisMonth: "চলতি মাস",
    thisYear: "চলতি বছর",
    allTime: "সর্বমোট",
    custom: "কাস্টম তারিখ",
    apply: "প্রয়োগ করুন",
    printReport: "রিপোর্ট প্রিন্ট",
    profitAndLossStatement: "লাভ-ক্ষতি ও পূর্ণাঙ্গ হিসাব বিবরণী",
    salesRevenue: "মোট বিক্রয় আয় (Sales Revenue)",
    cogsTitle: "বিক্রিত পণ্যের ক্রয়মূল্য (COGS)",
    operatingExpenses: "দোকানের মোট খরচ (Expenses)",
    netProfit: "নিট লাভ (Net Profit)",
    categoryWiseSales: "ক্যাটাগরি ভিত্তিক বিক্রয় ও লাভ",
    expenseBreakdown: "খরচের খাত ভিত্তিক বণ্টন",
    shopInfoSettings: "দোকানের তথ্য ও সেটিংস",
    shopName: "দোকানের নাম:",
    shopTagline: "দোকানের স্লোগান / বিবরণ:",
    email: "ইমেইল (ঐচ্ছিক):",
    invoiceFooter: "ক্যাশ মেমোর নিচের বার্তা (Footer Note):",
    lowStockThreshold: "ডিফল্ট কম স্টক এলার্ট সীমা (পিস):",
    currency: "কারেন্সি প্রতীক:",
    saveSettings: "সেটিংস সংরক্ষণ করুন",
    backupAndRestore: "ডাটা ব্যাকআপ ও রিস্টোর (Data Management)",
    backupNotice: "এই অ্যাপটি সম্পূর্ণ অফলাইনে ব্রাউজারে ডাটা সেভ রাখে। ডাটা সুরক্ষিত রাখতে নিয়মিত ব্যাকআপ ফাইল ডাউনলোড করে সংরক্ষণ করুন।",
    downloadJsonBackup: "১-ক্লিক সম্পূর্ণ ডাটা ব্যাকআপ ডাউনলোড",
    jsonBackupDesc: "পণ্য, বিক্রি, বাকি, খরচসহ সমস্ত ডাটা JSON ফাইলে ডাউনলোড হবে।",
    exportBackup: "ব্যাকআপ ফাইল ডাউনলোড",
    restoreBackup: "ব্যাকআপ থেকে ডাটা ফিরিয়ে আনুন (Restore)",
    restoreNotice: "পূর্বে সেভ করা JSON ব্যাকআপ ফাইল আপলোড করে পূর্বাবস্থায় আনুন।",
    selectBackupFile: "ফাইল সিলেক্ট করুন",
    resetDemoTitle: "ডেমো ডাটা রিসেট (Reset to Initial Demo Data)",
    resetDemoNotice: "Sleeve Shirt, Polo Shirt, Chino Pants এবং T-Shirt এর প্রারম্ভিক সাইজ-ভিত্তিক ডাটায় ফিরিয়ে নেবে।",
    resetDemoBtn: "ডেমো ডাটা রিসেট",
    pos: "বিক্রি (POS)",
    stock: "স্টক",
    menu: "মেনু",
    customerDetails: "কাস্টমার বিস্তারিত",
    cancel: "বাতিল",
    saveProduct: "সংরক্ষণ করুন",
    confirmStockIn: "স্টক ইন ও সেভ করুন",
    saveCustomer: "কাস্টমার সেভ করুন",
    saveDueCollection: "বাকি জমা ও ক্যাশ আপডেট",
    saveExpense: "খরচ সংরক্ষণ করুন",
    confirmAdjustment: "এডজাস্টমেন্ট নিশ্চিত করুন",
    salesReturn: "বিক্রয় ফেরত (Sales Return)",
    confirmReturn: "ফেরত নিশ্চিত ও স্টক বৃদ্ধি করুন",
    save: "সংরক্ষণ করুন",
    close: "বন্ধ করুন",
    printStatement: "বিবরণী প্রিন্ট",
    copyText: "কপি করুন",
    confirmation: "নিশ্চিত করুন",
    yes: "হ্যাঁ, নিশ্চিত",
    no: "না",
    cashInHand: "হাতে ক্যাশ:",
    revenueMinusCogs: "বিক্রি - ক্রয়মূল্য (COGS)",
    grossMinusExpense: "গ্রস লাভ - দোকান খরচ",
    openingPlusCashInMinusOut: "ওপেনিং + জমা - খরচ",
    viewAll: "সব দেখুন →",
    potentialGrossProfit: "সম্ভাব্য মোট গ্রস লাভ",
    lowStockItems: "কম স্টক আইটেম",
    expectedSaleTotal: "সম্ভাব্য মোট বিক্রয়",
    saleMinusCost: "বিক্রয়মূল্য - ক্রয়মূল্য",
    reorderNeeded: "রি-অর্ডার প্রয়োজন",
    registeredCustomers: "নিবন্ধিত কাস্টমার",
    totalCollectedDue: "মোট বাকি আদায়",
    totalCustomers: "মোট কাস্টমার সংখ্যা",
    paymentTransactions: "পেমেন্ট ট্রানজেকশন",
    monthlyShopExpense: "দোকান পরিচালনা খরচ",
    allExpensesRecorded: "সব খরচের হিসাব",
    cashOnHand: "হাতে নগদ টাকা",
    salesAndDueCollection: "বিক্রি + বাকি আদায়",
    purchasesAndExpenses: "মাল কেনা + খরচ",
    brand: "ব্র্যান্ড / কোম্পানি:",
    sku: "SKU / বারকোড:",
    minStockLevel: "কম স্টক এলার্ট সীমা:",
    sizeVariantsStock: "সাইজ ও স্টক বণ্টন*:",
    totalQuantity: "মোট স্টক সংখ্যা:",
    selectProduct: "পণ্য নির্বাচন করুন*:",
    selectSizeVariant: "সাইজ / ভ্যারিয়েন্ট*:",
    purchaseQty: "ক্রয় সংখ্যা (Quantity pcs)*:",
    unitCost: "প্রতি পিসের ক্রয়মূল্য (৳)*:",
    totalPurchaseCost: "মোট ক্রয়মূল্য (Total ৳):",
    supplierName: "সাপ্লায়ার / মহাজন:",
    paymentStatus: "পরিশোধের ধরন:",
    paidNow: "এখন নগদ পরিশোধ (৳):",
    supplierDueAmount: "সাপ্লায়ার বকেয়া (৳):",
    initialDue: "পূর্বের বাকি (যদি থাকে ৳):",
    currentPendingDue: "বর্তমান বকেয়া:",
    collectAmount: "আদায়কৃত টাকার পরিমাণ (৳)*:",
    remainingDueAfterPayment: "পরিশোধের পর অবশিষ্ট বাকি:",
    currentStock: "বর্তমান স্টক:",
    adjustmentType: "এডজাস্টমেন্টের ধরন*:",
    newStockAfterAdjustment: "এডজাস্টমেন্টের পর নতুন স্টক হবে:",
    reason: "কারণ (Reason)*:",
    selectReturnItems: "যে পণ্যগুলো ফেরত আসছে তা সিলেক্ট ও পরিমাণ লিখুন:",
    soldQty: "বিক্রিত সংখ্যা",
    unitPrice: "দর",
    returnQty: "ফেরত সংখ্যা",
    refundTotal: "ফেরত মূল্য",
    totalRefundAmount: "মোট ফেরত মূল্য:",
    refundAdjustmentMethod: "টাকা ফেরত বা এডজাস্টমেন্টের ধরন:",
    returnReason: "ফেরতের কারণ:",
    cashRegisterEntry: "ক্যাশ রেজিস্টার এন্ট্রি",
    cashEntryType: "এন্ট্রির ধরন*:",
    customerStatement: "কাস্টমার খাতা বিবরণী",
    purchaseAmount: "কেনাকাটা (+)",
    dueBalance: "বাকি ব্যালেন্স",
    bakiReminder: "বাকি পরিশোধের তাগাদা মেসেজ",
    generatedMessage: "তৈরিকৃত মেসেজ:",
    cashMemoInvoice: "ক্যাশ মেমো / ইনভয়েস"
  },
  en: {
    dashboard: "Dashboard",
    posBilling: "POS & Cash Memo",
    inventory: "Products & Stock",
    purchaseStockIn: "Stock In / Purchase",
    bakiKhata: "Customer & Due Ledger",
    expenses: "Expense Ledger",
    cashFlow: "Cash Flow & Register",
    salesHistory: "Sales History & Return",
    stockMovements: "Stock Movement Audit",
    reports: "Profit & Loss Reports",
    settings: "Settings & Backup",
    mainMenu: "Main Menu",
    operations: "Operations",
    offlineReady: "Offline Ready",
    clothingRetail: "Clothing & Fashion Retail",
    todaySale: "Today's Total Sale",
    todayGrossProfit: "Today's Gross Profit",
    todayExpense: "Today's Expense",
    todayNetProfit: "Today's Net Profit",
    totalCustomerDue: "Total Customer Due",
    currentCashBalance: "Current Cash Balance",
    stockCostValue: "Stock Cost Value",
    stockSaleValue: "Stock Sale Value",
    quickActions: "Quick Actions:",
    newSale: "New Sale",
    addProduct: "Add Product",
    stockIn: "Stock In / Buy",
    addExpense: "Add Expense",
    collectDue: "Collect Due",
    openingCash: "Opening Cash",
    stockBreakdown: "Stock & Price Overview",
    lowStockAlerts: "Low Stock Alerts",
    recentActivities: "Recent Activity Feed",
    topSellingItems: "Top Selling Items",
    allCategories: "All Categories",
    allStock: "All Stock",
    lowStockOnly: "⚠️ Low Stock Only",
    inStockOnly: "In Stock",
    outOfStock: "Out of Stock",
    selectCustomer: "Select Customer:",
    walkInCustomer: "🚶 Walk-in Customer",
    item: "Product & Size",
    qty: "Qty",
    price: "Price",
    total: "Total",
    subtotal: "Subtotal:",
    discount: "Discount:",
    grandTotal: "Grand Total:",
    paymentMethod: "Payment Method:",
    cash: "Cash",
    card: "Card",
    dueBaki: "Full Due",
    splitPayment: "Partial / Split",
    paidAmount: "Paid Amount:",
    dueAmount: "Due Amount:",
    clearCart: "Clear Cart",
    confirmSaleAndPrint: "Complete Sale & Memo",
    productInfo: "Product Info",
    category: "Category",
    variantsStock: "Size & Stock Breakdown",
    purchasePrice: "Cost Price",
    sellingPrice: "Selling Price",
    totalStock: "Total Stock",
    stockCost: "Stock Cost",
    potentialSale: "Potential Sale",
    status: "Status",
    action: "Action",
    exportCsv: "Export CSV",
    addNewProduct: "Add New Product",
    newStockPurchase: "New Purchase / Stock In",
    purchaseId: "Purchase ID",
    date: "Date",
    productDetails: "Product & Quantity",
    supplier: "Supplier",
    totalCost: "Total Cost",
    supplierDue: "Supplier Due",
    customerName: "Customer Name",
    phone: "Phone Number",
    address: "Address",
    totalPurchased: "Total Purchased",
    totalPaid: "Total Paid",
    currentDue: "Current Due",
    addNewCustomer: "Add New Customer",
    allCustomers: "All Customers",
    dueCustomersOnly: "⚠️ Due Only",
    paidCustomersOnly: "Paid Only",
    expenseCategory: "Expense Category",
    amount: "Amount (৳)",
    paymentMethodCol: "Payment Method",
    note: "Note / Description",
    currentCashBalTitle: "Current Cash Balance",
    todayCashIn: "Today's Cash In",
    todayCashOut: "Today's Cash Out",
    cashLedger: "Cash Flow Ledger",
    openingCashOrManual: "Opening Cash / Entry",
    dateTime: "Date & Time",
    type: "Transaction Type",
    refId: "Ref ID",
    description: "Description",
    cashIn: "Cash In (+)",
    cashOut: "Cash Out (-)",
    balance: "Balance (৳)",
    invoiceNo: "Invoice No",
    customer: "Customer",
    items: "Items & Sizes",
    paid: "Paid",
    due: "Due",
    grossProfit: "Profit",
    stockAuditTrail: "Stock Audit Trail",
    product: "Product & Size",
    changeReason: "Reason",
    qtyChange: "Qty Change",
    prevStock: "Prev Stock",
    newStock: "New Stock",
    stockAdjustment: "Stock Adjustment",
    today: "Today",
    yesterday: "Yesterday",
    thisWeek: "This Week",
    thisMonth: "This Month",
    thisYear: "This Year",
    allTime: "All Time",
    custom: "Custom Date",
    apply: "Apply",
    printReport: "Print Report",
    profitAndLossStatement: "Profit & Loss Statement",
    salesRevenue: "Sales Revenue",
    cogsTitle: "Cost of Goods Sold (COGS)",
    operatingExpenses: "Operating Expenses",
    netProfit: "Net Profit",
    categoryWiseSales: "Category Sales & Profit",
    expenseBreakdown: "Expense Breakdown",
    shopInfoSettings: "Shop Info & Settings",
    shopName: "Shop Name:",
    shopTagline: "Shop Tagline:",
    email: "Email (Optional):",
    invoiceFooter: "Invoice Memo Footer Note:",
    lowStockThreshold: "Default Low Stock Alert:",
    currency: "Currency Symbol:",
    saveSettings: "Save Settings",
    backupAndRestore: "Data Backup & Restore",
    backupNotice: "This app works 100% offline. Download regular backups to safeguard your shop data.",
    downloadJsonBackup: "1-Click Download Full JSON Backup",
    jsonBackupDesc: "All products, sales, dues, and expenses exported safely.",
    exportBackup: "Export Backup",
    restoreBackup: "Restore Data from Backup",
    restoreNotice: "Upload previously downloaded JSON file to restore.",
    selectBackupFile: "Select Backup File",
    resetDemoTitle: "Reset to Demo Data",
    resetDemoNotice: "Resets to initial size-wise clothing products.",
    resetDemoBtn: "Reset Demo Data",
    pos: "POS",
    stock: "Stock",
    menu: "Menu",
    customerDetails: "Customer Details",
    cancel: "Cancel",
    saveProduct: "Save Product",
    confirmStockIn: "Save Stock In",
    saveCustomer: "Save Customer",
    saveDueCollection: "Save Payment",
    saveExpense: "Save Expense",
    confirmAdjustment: "Confirm Adjustment",
    salesReturn: "Sales Return",
    confirmReturn: "Confirm Return",
    save: "Save",
    close: "Close",
    printStatement: "Print Statement",
    copyText: "Copy Text",
    confirmation: "Confirmation",
    yes: "Yes, Confirm",
    no: "No",
    cashInHand: "Cash on Hand:",
    revenueMinusCogs: "Revenue - COGS",
    grossMinusExpense: "Gross Profit - Expense",
    openingPlusCashInMinusOut: "Opening + In - Out",
    viewAll: "View All →",
    potentialGrossProfit: "Potential Gross Profit",
    lowStockItems: "Low Stock Items",
    expectedSaleTotal: "Expected Total Sale",
    saleMinusCost: "Sale Price - Cost Price",
    reorderNeeded: "Reorder Needed",
    registeredCustomers: "Registered Customers",
    totalCollectedDue: "Total Due Collected",
    totalCustomers: "Total Customers",
    paymentTransactions: "Payment Transactions",
    monthlyShopExpense: "Monthly Expenses",
    allExpensesRecorded: "All Expenses Recorded",
    cashOnHand: "Cash on Hand",
    salesAndDueCollection: "Sales + Dues Collected",
    purchasesAndExpenses: "Purchases + Expenses",
    brand: "Brand:",
    sku: "SKU / Barcode:",
    minStockLevel: "Min Stock Alert:",
    sizeVariantsStock: "Size & Stock Breakdown*:",
    totalQuantity: "Total Quantity:",
    selectProduct: "Select Product*:",
    selectSizeVariant: "Size / Variant*:",
    purchaseQty: "Purchase Quantity (pcs)*:",
    unitCost: "Unit Cost Price (৳)*:",
    totalPurchaseCost: "Total Cost (৳):",
    supplierName: "Supplier Name:",
    paymentStatus: "Payment Type:",
    paidNow: "Cash Paid Now (৳):",
    supplierDueAmount: "Supplier Due (৳):",
    initialDue: "Initial Due (৳):",
    currentPendingDue: "Current Due:",
    collectAmount: "Collected Amount (৳)*:",
    remainingDueAfterPayment: "Remaining Due:",
    currentStock: "Current Stock:",
    adjustmentType: "Adjustment Type*:",
    newStockAfterAdjustment: "New Stock After Adj:",
    reason: "Reason*:",
    selectReturnItems: "Select items to return & enter quantity:",
    soldQty: "Sold Qty",
    unitPrice: "Unit Price",
    returnQty: "Return Qty",
    refundTotal: "Refund Total",
    totalRefundAmount: "Total Refund:",
    refundAdjustmentMethod: "Refund / Adjustment Method:",
    returnReason: "Return Reason:",
    cashRegisterEntry: "Cash Register Entry",
    cashEntryType: "Entry Type*:",
    customerStatement: "Customer Statement",
    purchaseAmount: "Purchased (+)",
    dueBalance: "Due Balance",
    bakiReminder: "Payment Reminder Message",
    generatedMessage: "Generated Message:",
    cashMemoInvoice: "Cash Memo / Invoice"
  }
};

// =========================================================
// INITIAL DEMO STATE (Size-Wise Clothing Inventory)
// =========================================================
const INITIAL_DEMO_STATE = {
  products: [
    {
      id: "PROD-001",
      name: "Sleeve Shirt",
      category: "Shirt",
      brand: "Faiza Zone",
      sku: "SHT-001",
      purchasePrice: 450,
      sellingPrice: 700,
      minStock: 5,
      variants: [
        { size: "M", qty: 50 },
        { size: "L", qty: 60 },
        { size: "XL", qty: 38 }
      ],
      totalStock: 148,
      notes: "Cotton Formal Long Sleeve Shirt",
      createdAt: new Date().toISOString()
    },
    {
      id: "PROD-002",
      name: "Polo Shirt",
      category: "T-Shirt",
      brand: "Faiza Zone",
      sku: "POLO-001",
      purchasePrice: 300,
      sellingPrice: 500,
      minStock: 5,
      variants: [
        { size: "M", qty: 6 },
        { size: "L", qty: 5 },
        { size: "XL", qty: 5 }
      ],
      totalStock: 16,
      notes: "Premium Pique Cotton Polo Shirt",
      createdAt: new Date().toISOString()
    },
    {
      id: "PROD-003",
      name: "Slim Fit Chino Pants",
      category: "Pants",
      brand: "Faiza Zone",
      sku: "PNT-001",
      purchasePrice: 550,
      sellingPrice: 900,
      minStock: 10,
      variants: [
        { size: "30", qty: 45 },
        { size: "32", qty: 55 },
        { size: "34", qty: 50 },
        { size: "36", qty: 42 }
      ],
      totalStock: 192,
      notes: "Stretch Twill Chino Casual Pant",
      createdAt: new Date().toISOString()
    },
    {
      id: "PROD-004",
      name: "Cotton Casual T-Shirt",
      category: "T-Shirt",
      brand: "Faiza Zone",
      sku: "TSH-001",
      purchasePrice: 220,
      sellingPrice: 350,
      minStock: 5,
      variants: [
        { size: "M", qty: 5 },
        { size: "L", qty: 10 },
        { size: "XL", qty: 5 }
      ],
      totalStock: 20,
      notes: "100% Export Quality Cotton T-Shirt",
      createdAt: new Date().toISOString()
    }
  ],
  categories: [
    "Shirt",
    "T-Shirt",
    "Polo",
    "Pants",
    "Jeans",
    "Panjabi",
    "Kabli",
    "Three Piece",
    "Kids",
    "Others"
  ],
  sales: [],
  purchases: [],
  customers: [
    {
      id: "CUST-001",
      name: "রহিম (Rahim)",
      phone: "01711-223344",
      address: "ঢাকা",
      totalPurchased: 0,
      totalPaid: 0,
      due: 0,
      ledger: []
    },
    {
      id: "CUST-002",
      name: "করিম চৌধুরী (Karim)",
      phone: "01819-887766",
      address: "মিরপুর, ঢাকা",
      totalPurchased: 0,
      totalPaid: 0,
      due: 0,
      ledger: []
    }
  ],
  expenses: [],
  payments: [],
  returns: [],
  stockMovements: [
    {
      id: "MOV-001",
      date: new Date().toISOString(),
      productId: "PROD-001",
      productName: "Sleeve Shirt",
      variant: "M",
      change: 50,
      prevStock: 0,
      newStock: 50,
      reason: "Initial Stock Setup",
      refId: "INIT-001-M"
    },
    {
      id: "MOV-002",
      date: new Date().toISOString(),
      productId: "PROD-001",
      productName: "Sleeve Shirt",
      variant: "L",
      change: 60,
      prevStock: 0,
      newStock: 60,
      reason: "Initial Stock Setup",
      refId: "INIT-001-L"
    },
    {
      id: "MOV-003",
      date: new Date().toISOString(),
      productId: "PROD-001",
      productName: "Sleeve Shirt",
      variant: "XL",
      change: 38,
      prevStock: 0,
      newStock: 38,
      reason: "Initial Stock Setup",
      refId: "INIT-001-XL"
    },
    {
      id: "MOV-004",
      date: new Date().toISOString(),
      productId: "PROD-002",
      productName: "Polo Shirt",
      variant: "M",
      change: 6,
      prevStock: 0,
      newStock: 6,
      reason: "Initial Stock Setup",
      refId: "INIT-002-M"
    },
    {
      id: "MOV-005",
      date: new Date().toISOString(),
      productId: "PROD-002",
      productName: "Polo Shirt",
      variant: "L",
      change: 5,
      prevStock: 0,
      newStock: 5,
      reason: "Initial Stock Setup",
      refId: "INIT-002-L"
    },
    {
      id: "MOV-006",
      date: new Date().toISOString(),
      productId: "PROD-002",
      productName: "Polo Shirt",
      variant: "XL",
      change: 5,
      prevStock: 0,
      newStock: 5,
      reason: "Initial Stock Setup",
      refId: "INIT-002-XL"
    }
  ],
  cashTransactions: [
    {
      id: "CASH-001",
      date: new Date().toISOString(),
      type: "Opening Cash",
      refId: "INIT-CASH",
      description: "দিনের প্রারম্ভিক ক্যাশ",
      in: 5000,
      out: 0,
      balance: 5000
    }
  ],
  openingCash: 5000,
  settings: {
    shopName: "Faiza Zone",
    tagline: "Clothing & Fashion Retail",
    phone: "01700-000000",
    email: "faizazone@example.com",
    address: "দোকান নং #১২, নিউ মার্কেট, ঢাকা",
    invoiceFooter: "আমাদের সাথে থাকার জন্য ধন্যবাদ। আবার আসবেন!",
    lowStockThreshold: 5,
    currency: "৳",
    lang: "bn",
    theme: "dark",
    soundEnabled: true
  },
  activities: [
    {
      id: "ACT-001",
      date: new Date().toISOString(),
      icon: "📦",
      title: "দোকানের প্রারম্ভিক স্টক যুক্ত হয়েছে (Sleeve Shirt, Polo Shirt, Pants, T-Shirt)",
      amount: "৳ 2,17,200 Stock Value"
    },
    {
      id: "ACT-002",
      date: new Date().toISOString(),
      icon: "💵",
      title: "প্রারম্ভিক ক্যাশ রেজিস্টার ব্যালেন্স সেট করা হয়েছে",
      amount: "৳ 5,000"
    }
  ]
};

// =========================================================
// APPLICATION CLASS
// =========================================================
class HisabApp {
  constructor() {
    this.storageKey = "faiza_zone_hisab_state_v2";
    this.state = this.loadState();
    this.cart = [];
    this.currentView = "dashboard";
    this.audioCtx = null;
    this.confirmCallback = null;
    this.mobilePosTab = "products";
    this.currentPickerProductId = null;
    this.deferredInstallPrompt = null;
    this.activeCustomerId = null;
    this.currentReportPeriod = "today";
    this.currentReportMetric = "sales";
    
    this.init();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_DEMO_STATE, ...parsed, settings: { ...INITIAL_DEMO_STATE.settings, ...parsed.settings } };
      }
    } catch (e) {
      console.error("Failed to load local state:", e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DEMO_STATE));
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to save state to LocalStorage:", e);
      this.showToast("স্টোরেজ পূর্ণ বা ত্রুটি হয়েছে!", "error");
    }
  }

  init() {
    this.applyTheme(this.state.settings.theme || "dark");
    this.applyLanguage(this.state.settings.lang || "bn");
    this.setupEventListeners();
    this.startClock();
    this.registerServiceWorker();
    this.setupPwaInstallPrompt();
    this.renderAll();
  }

  // =========================================================
  // PWA OFFLINE SERVICE WORKER & APP INSTALL PROMPT
  // =========================================================
  registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
          .then(reg => {
            console.log("[PWA] Service Worker active, scope:", reg.scope);
          })
          .catch(err => {
            console.warn("[PWA] Service Worker registration:", err);
          });
      });
    }
  }

  setupPwaInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredInstallPrompt = e;
      console.log("[PWA] Native App install prompt captured");
      document.querySelectorAll(".install-app-btn").forEach(b => b.classList.remove("hidden"));
    });

    window.addEventListener("appinstalled", () => {
      this.deferredInstallPrompt = null;
      this.showToast("অ্যাপটি সফলভাবে ইনস্টল হয়েছে!", "success");
      this.playSound("success");
    });
  }

  promptInstallPwa() {
    if (this.deferredInstallPrompt) {
      this.deferredInstallPrompt.prompt();
      this.deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          this.showToast("অ্যাপ ইনস্টলেশন সফল হয়েছে!", "success");
        }
        this.deferredInstallPrompt = null;
      });
    } else {
      this.showToast("আপনার মোবাইল ব্রাউজারের (⋮) মেনু থেকে 'Install App' বা 'Add to Home Screen' চাপুন।", "info");
    }
  }

  // Synthesizer Audio Feedback
  playSound(type) {
    if (!this.state.settings.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === "beep") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      console.warn("Audio synth:", e);
    }
  }

  // =========================================================
  // THEME & LOCALIZATION
  // =========================================================
  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    this.state.settings.theme = theme;
    const isDark = theme === "dark";
    const darkIcon = document.getElementById("theme-icon-dark");
    const lightIcon = document.getElementById("theme-icon-light");
    if (darkIcon) darkIcon.classList.toggle("hidden", !isDark);
    if (lightIcon) lightIcon.classList.toggle("hidden", isDark);
    this.saveState();
  }

  toggleTheme() {
    const nextTheme = this.state.settings.theme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
  }

  applyLanguage(lang) {
    this.state.settings.lang = lang;
    document.documentElement.lang = lang;
    const dict = I18N[lang] || I18N.bn;
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = lang === "bn" ? "বাং" : "EN";

    this.saveState();
    this.renderAll();
  }

  toggleLanguage() {
    const nextLang = this.state.settings.lang === "bn" ? "en" : "bn";
    this.applyLanguage(nextLang);
    this.showToast(nextLang === "bn" ? "ভাষা বাংলা নির্বাচন করা হয়েছে" : "Language switched to English", "success");
  }

  toggleSound() {
    this.state.settings.soundEnabled = !this.state.settings.soundEnabled;
    const isEnabled = this.state.settings.soundEnabled;
    this.saveState();
    this.showToast(isEnabled ? "সাউন্ড অন" : "সাউন্ড মিউট", "success");
  }

  startClock() {
    const el = document.getElementById("live-datetime");
    const update = () => {
      const d = new Date();
      const isBn = (this.state.settings.lang || "bn") === "bn";
      if (isBn) {
        const days = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'];
        const months = ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
        const dayName = days[d.getDay()];
        const dayNum = d.getDate().toLocaleString('bn-BD');
        const monthName = months[d.getMonth()];
        const year = d.getFullYear().toLocaleString('bn-BD');
        
        let hours = d.getHours();
        const minutes = d.getMinutes().toString().padStart(2, '0').toLocaleString('bn-BD');
        const seconds = d.getSeconds().toString().padStart(2, '0').toLocaleString('bn-BD');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const hourStr = hours.toLocaleString('bn-BD');
        
        if (el) el.textContent = `${dayName}, ${dayNum} ${monthName} ${year}  |  ${hourStr}:${minutes}:${seconds} ${ampm}`;
      } else {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        if (el) el.textContent = d.toLocaleDateString('en-US', options);
      }
    };
    update();
    setInterval(update, 1000);
  }

  getCategoryVisual(category) {
    const cat = (category || "").toLowerCase().trim();
    if (cat.includes("t-shirt") || cat.includes("tshirt")) {
      return { emoji: "👕", class: "cat-theme-tshirt", name: "T-Shirt" };
    } else if (cat.includes("shirt")) {
      return { emoji: "👔", class: "cat-theme-shirt", name: "Shirt" };
    } else if (cat.includes("polo")) {
      return { emoji: "👕", class: "cat-theme-polo", name: "Polo" };
    } else if (cat.includes("pant") || cat.includes("trouser") || cat.includes("gabardine")) {
      return { emoji: "👖", class: "cat-theme-pants", name: "Pants" };
    } else if (cat.includes("jean") || cat.includes("denim")) {
      return { emoji: "👖", class: "cat-theme-jeans", name: "Jeans" };
    } else if (cat.includes("panjabi") || cat.includes("punjabi") || cat.includes("kabli") || cat.includes("kurta")) {
      return { emoji: "🥻", class: "cat-theme-panjabi", name: "Panjabi" };
    } else if (cat.includes("three") || cat.includes("dress") || cat.includes("women") || cat.includes("sharee") || cat.includes("saree") || cat.includes("borka")) {
      return { emoji: "👗", class: "cat-theme-women", name: "Three Piece" };
    } else if (cat.includes("kid") || cat.includes("baby") || cat.includes("child")) {
      return { emoji: "🧸", class: "cat-theme-kids", name: "Kids" };
    }
    return { emoji: "🛍️", class: "cat-theme-other", name: category || "Others" };
  }

  handleDashboardDateFilter(period) {
    this.currentDashDateFilter = period;
    this.renderDashboard();
  }

  // =========================================================
  // NAVIGATION & ROUTING
  // =========================================================
  navigateTo(viewId) {
    this.currentView = viewId;
    
    document.querySelectorAll(".app-view").forEach(el => el.classList.remove("active"));
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) targetView.classList.add("active");

    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
    });

    document.querySelectorAll(".bottom-nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
    });

    const dict = I18N[this.state.settings.lang] || I18N.bn;
    const titleKeyMap = {
      dashboard: "dashboard",
      pos: "posBilling",
      inventory: "inventory",
      purchases: "purchaseStockIn",
      customers: "bakiKhata",
      "customer-details": "customerDetails",
      menu: "menu",
      expenses: "expenses",
      cashflow: "cashFlow",
      "sales-history": "salesHistory",
      "stock-movements": "stockMovements",
      reports: "reports",
      settings: "settings"
    };
    const titleEl = document.getElementById("current-page-title");
    if (titleEl && titleKeyMap[viewId]) {
      titleEl.textContent = dict[titleKeyMap[viewId]] || viewId;
    }

    // Toggle header POS button (hide when already on POS screen for clean layout)
    const headerPosBtn = document.getElementById("header-pos-btn");
    if (headerPosBtn) {
      headerPosBtn.style.display = viewId === "pos" ? "none" : "inline-flex";
    }

    // Close mobile drawer & backdrop
    this.closeMobileDrawer();

    // Re-render
    this.renderView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showPos() {
    this.navigateTo("pos");
  }

  openMobileDrawer() {
    document.getElementById("sidebar")?.classList.add("open");
    document.getElementById("sidebar-backdrop")?.classList.add("active");
  }

  closeMobileDrawer() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebar-backdrop")?.classList.remove("active");
  }

  switchMobilePosTab(tabName) {
    this.mobilePosTab = tabName;
    const posLayout = document.querySelector(".pos-layout");
    const prodTabBtn = document.getElementById("pos-tab-products-btn");
    const cartTabBtn = document.getElementById("pos-tab-cart-btn");
    const floatingBar = document.getElementById("pos-mobile-floating-bar");
    
    if (tabName === "cart") {
      posLayout?.classList.add("mobile-show-cart");
      prodTabBtn?.classList.remove("active");
      cartTabBtn?.classList.add("active");
      if (floatingBar) floatingBar.classList.add("hidden");
    } else {
      posLayout?.classList.remove("mobile-show-cart");
      prodTabBtn?.classList.add("active");
      cartTabBtn?.classList.remove("active");
      if (floatingBar && this.cart.length > 0) {
        floatingBar.classList.remove("hidden");
      }
    }
  }

  // =========================================================
  // FORMATTING HELPERS
  // =========================================================
  formatCurrency(num) {
    const val = Number(num) || 0;
    return `৳ ${val.toLocaleString('en-IN')}`;
  }

  formatDate(isoStr) {
    if (!isoStr) return "--";
    const d = new Date(isoStr);
    return d.toLocaleDateString(this.state.settings.lang === 'bn' ? 'bn-BD' : 'en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  generateId(prefix) {
    const d = new Date();
    const dateStr = d.getFullYear().toString() +
      String(d.getMonth() + 1).padStart(2, '0') +
      String(d.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${dateStr}-${random}`;
  }

  addActivity(icon, title, amount) {
    const activity = {
      id: this.generateId("ACT"),
      date: new Date().toISOString(),
      icon,
      title,
      amount
    };
    this.state.activities.unshift(activity);
    if (this.state.activities.length > 50) this.state.activities.pop();
    this.saveState();
  }

  // =========================================================
  // CORE CALCULATIONS & METRICS (Size-Wise)
  // =========================================================
  calculateMetrics(period = this.currentDashDateFilter || "today") {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const weekStartStr = startOfWeek.toISOString().split("T")[0];

    const currentMonth = now.toISOString().slice(0, 7);

    const isMatchPeriod = (dateStr) => {
      const d = (dateStr || "").split("T")[0];
      if (period === "today") return d === todayStr;
      if (period === "yesterday") return d === yesterdayStr;
      if (period === "this_week") return d >= weekStartStr && d <= todayStr;
      if (period === "this_month") return d.startsWith(currentMonth);
      return true; // "all"
    };
    
    let todaySales = 0;
    let todayCOGS = 0;
    let todayOrdersCount = 0;
    let todaySoldPieces = 0;

    let totalSalesRevenue = 0;
    let totalCOGS = 0;

    this.state.sales.forEach(sale => {
      const saleDate = sale.date.split("T")[0];
      totalSalesRevenue += (sale.grandTotal || 0);
      totalCOGS += (sale.totalCOGS || 0);

      if (isMatchPeriod(saleDate)) {
        todaySales += (sale.grandTotal || 0);
        todayCOGS += (sale.totalCOGS || 0);
        todayOrdersCount++;
        if (sale.items) {
          sale.items.forEach(i => todaySoldPieces += (i.totalQty || i.qty || 0));
        }
      }
    });

    const todayGrossProfit = todaySales - todayCOGS;
    const totalGrossProfit = totalSalesRevenue - totalCOGS;

    let todayExpense = 0;
    let todayExpenseCount = 0;
    let monthExpense = 0;
    let totalExpense = 0;

    this.state.expenses.forEach(exp => {
      const expDate = exp.date.split("T")[0];
      totalExpense += exp.amount;

      if (isMatchPeriod(expDate)) {
        todayExpense += exp.amount;
        todayExpenseCount++;
      }
      if (exp.date.startsWith(currentMonth)) {
        monthExpense += exp.amount;
      }
    });

    const todayNetProfit = todayGrossProfit - todayExpense;
    const totalNetProfit = totalGrossProfit - totalExpense;

    let totalCustomerDue = 0;
    let dueCustomersCount = 0;
    this.state.customers.forEach(cust => {
      if (cust.due > 0) {
        totalCustomerDue += cust.due;
        dueCustomersCount++;
      }
    });

    let cashIn = 0, cashOut = 0;
    let bkashIn = 0, bkashOut = 0;
    let nagadIn = 0, nagadOut = 0;
    let bankIn = 0, bankOut = 0;

    let todayCashIn = 0, todayCashOut = 0;
    let todayBkashIn = 0, todayBkashOut = 0;
    let todayNagadIn = 0, todayNagadOut = 0;
    let todayBankIn = 0, todayBankOut = 0;

    this.state.cashTransactions.forEach(tx => {
      const acc = (tx.account || (tx.type && tx.type.toLowerCase().includes("bkash") ? "bkash" : (tx.type && tx.type.toLowerCase().includes("nagad") ? "nagad" : (tx.type && (tx.type.toLowerCase().includes("bank") || tx.type.toLowerCase().includes("card")) ? "bank" : "cash")))).toLowerCase();
      const txDate = (tx.date || "").split("T")[0];
      const inAmt = Number(tx.in) || 0;
      const outAmt = Number(tx.out) || 0;

      if (acc === "bkash") {
        bkashIn += inAmt;
        bkashOut += outAmt;
        if (txDate === todayStr) {
          todayBkashIn += inAmt;
          todayBkashOut += outAmt;
        }
      } else if (acc === "nagad") {
        nagadIn += inAmt;
        nagadOut += outAmt;
        if (txDate === todayStr) {
          todayNagadIn += inAmt;
          todayNagadOut += outAmt;
        }
      } else if (acc === "bank") {
        bankIn += inAmt;
        bankOut += outAmt;
        if (txDate === todayStr) {
          todayBankIn += inAmt;
          todayBankOut += outAmt;
        }
      } else {
        cashIn += inAmt;
        cashOut += outAmt;
        if (txDate === todayStr) {
          todayCashIn += inAmt;
          todayCashOut += outAmt;
        }
      }
    });

    const cashBalance = cashIn - cashOut;
    const bkashBalance = bkashIn - bkashOut;
    const nagadBalance = nagadIn - nagadOut;
    const bankBalance = bankIn - bankOut;
    const currentCashBalance = cashBalance;
    const totalLiquidBalance = cashBalance + bkashBalance + nagadBalance + bankBalance;

    let stockCostValue = 0;
    let stockSaleValue = 0;
    let totalProductsCount = this.state.products.length;
    let totalItemsQty = 0;
    const lowStockList = [];

    const defaultMin = this.state.settings.lowStockThreshold || 5;

    this.state.products.forEach(p => {
      const minLevel = p.minStock || defaultMin;
      let pTotal = 0;

      if (p.variants && p.variants.length > 0) {
        p.variants.forEach(v => {
          const vQty = Number(v.qty) || 0;
          pTotal += vQty;
          if (vQty <= minLevel) {
            lowStockList.push({
              productId: p.id,
              productName: p.name,
              category: p.category,
              size: v.size,
              qty: vQty,
              minStock: minLevel
            });
          }
        });
      } else {
        pTotal = Number(p.totalStock) || 0;
        if (pTotal <= minLevel) {
          lowStockList.push({
            productId: p.id,
            productName: p.name,
            category: p.category,
            size: "All",
            qty: pTotal,
            minStock: minLevel
          });
        }
      }

      p.totalStock = pTotal;
      stockCostValue += pTotal * (p.purchasePrice || 0);
      stockSaleValue += pTotal * (p.sellingPrice || 0);
      totalItemsQty += pTotal;
    });

    const potentialStockProfit = stockSaleValue - stockCostValue;

    return {
      todaySales,
      todayGrossProfit,
      todayExpense,
      todayNetProfit,
      todayOrdersCount,
      todaySoldPieces,
      todayExpenseCount,
      totalSalesRevenue,
      totalCOGS,
      totalGrossProfit,
      totalExpense,
      monthExpense,
      totalNetProfit,
      totalCustomerDue,
      dueCustomersCount,
      cashBalance,
      bkashBalance,
      nagadBalance,
      bankBalance,
      currentCashBalance,
      totalLiquidBalance,
      todayCashIn,
      todayCashOut,
      todayBkashIn,
      todayBkashOut,
      todayNagadIn,
      todayNagadOut,
      todayBankIn,
      todayBankOut,
      stockCostValue,
      stockSaleValue,
      potentialStockProfit,
      totalProductsCount,
      totalItemsQty,
      lowStockList,
      lowStockCount: lowStockList.length
    };
  }

  getAccountBalance(accountKey) {
    const m = this.calculateMetrics();
    if (accountKey === "bkash") return m.bkashBalance;
    if (accountKey === "nagad") return m.nagadBalance;
    if (accountKey === "bank") return m.bankBalance;
    return m.cashBalance;
  }

  // =========================================================
  // VIEW RENDERERS
  // =========================================================
  renderAll() {
    this.renderHeader();
    this.renderDashboard();
    this.renderPos();
    this.renderInventory();
    this.renderPurchases();
    this.renderCustomers();
    this.renderExpenses();
    this.renderCashflow();
    this.renderSalesHistory();
    this.renderStockMovements();
    this.renderReports();
    this.renderSettings();
  }

  renderView(viewId) {
    this.renderHeader();
    switch (viewId) {
      case "dashboard": this.renderDashboard(); break;
      case "pos": this.renderPos(); break;
      case "inventory": this.renderInventory(); break;
      case "purchases": this.renderPurchases(); break;
      case "customers": this.renderCustomers(); break;
      case "customer-details": this.renderCustomerDetails(this.activeCustomerId); break;
      case "menu": this.renderMenu(); break;
      case "expenses": this.renderExpenses(); break;
      case "cashflow": this.renderCashflow(); break;
      case "sales-history": this.renderSalesHistory(); break;
      case "stock-movements": this.renderStockMovements(); break;
      case "reports": this.renderReports(); break;
      case "settings": this.renderSettings(); break;
    }
  }

  renderHeader() {
    const metrics = this.calculateMetrics();
    const cashValEl = document.getElementById("header-cash-val");
    if (cashValEl) {
      if (metrics.bkashBalance > 0 || metrics.nagadBalance > 0 || metrics.bankBalance > 0) {
        const parts = [`💵 ${this.formatCurrency(metrics.cashBalance)}`];
        if (metrics.bkashBalance > 0) parts.push(`📱 ${this.formatCurrency(metrics.bkashBalance)}`);
        if (metrics.nagadBalance > 0) parts.push(`🟠 ${this.formatCurrency(metrics.nagadBalance)}`);
        cashValEl.textContent = parts.join(" | ");
      } else {
        cashValEl.textContent = this.formatCurrency(metrics.cashBalance);
      }
    }

    const cartCount = this.cart.reduce((acc, item) => acc + (item.totalQty || item.qty || 0), 0);

    const cartBadge = document.getElementById("cart-nav-badge");
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      cartBadge.style.display = cartCount > 0 ? "inline-block" : "none";
    }

    const mobileCartBadge = document.getElementById("pos-mobile-cart-badge");
    if (mobileCartBadge) {
      mobileCartBadge.textContent = cartCount;
    }

    const lowStockBadge = document.getElementById("low-stock-nav-badge");
    if (lowStockBadge) {
      lowStockBadge.textContent = metrics.lowStockCount;
      lowStockBadge.classList.toggle("hidden", metrics.lowStockCount === 0);
    }
  }

  // --- DASHBOARD RENDERER ---
  renderDashboard() {
    const currentPeriod = this.currentDashDateFilter || "today";
    const m = this.calculateMetrics(currentPeriod);

    // Update Dashboard Date Display Bar with Beautiful Spacing
    const dateDisplayEl = document.getElementById("dash-date-display");
    const dateFilterSelect = document.getElementById("dash-date-filter");
    if (dateFilterSelect) dateFilterSelect.value = currentPeriod;

    if (dateDisplayEl) {
      const now = new Date();
      const isBn = (this.state.settings.lang || "bn") === "bn";
      const monthsBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
      const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const dayNum = isBn ? now.getDate().toLocaleString('bn-BD') : now.getDate();
      const monthName = isBn ? monthsBn[now.getMonth()] : monthsEn[now.getMonth()];
      const year = isBn ? now.getFullYear().toLocaleString('bn-BD') : now.getFullYear();

      if (currentPeriod === "today") {
        dateDisplayEl.textContent = isBn ? `আজ,  ${dayNum} ${monthName} ${year}` : `Today,  ${monthName} ${dayNum}, ${year}`;
      } else if (currentPeriod === "yesterday") {
        const y = new Date(now);
        y.setDate(now.getDate() - 1);
        const yDay = isBn ? y.getDate().toLocaleString('bn-BD') : y.getDate();
        const yMonth = isBn ? monthsBn[y.getMonth()] : monthsEn[y.getMonth()];
        const yYear = isBn ? y.getFullYear().toLocaleString('bn-BD') : y.getFullYear();
        dateDisplayEl.textContent = isBn ? `গতকাল,  ${yDay} ${yMonth} ${yYear}` : `Yesterday,  ${yMonth} ${yDay}, ${yYear}`;
      } else if (currentPeriod === "this_week") {
        dateDisplayEl.textContent = isBn ? `চলতি সপ্তাহ (${monthName} ${year})` : `This Week (${monthName} ${year})`;
      } else if (currentPeriod === "this_month") {
        dateDisplayEl.textContent = isBn ? `চলতি মাস (${monthName} ${year})` : `This Month (${monthName} ${year})`;
      } else {
        dateDisplayEl.textContent = isBn ? `সব সময় (সার্বিক হিসাব)` : `All Time (Overall Statistics)`;
      }
    }

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt("dash-today-sale", this.formatCurrency(m.todaySales));
    setTxt("dash-today-profit", this.formatCurrency(m.todayGrossProfit));
    setTxt("dash-today-expense", this.formatCurrency(m.todayExpense));
    setTxt("dash-today-net-profit", this.formatCurrency(m.todayNetProfit));
    setTxt("dash-total-due", this.formatCurrency(m.totalCustomerDue));
    setTxt("dash-cash-balance", this.formatCurrency(m.currentCashBalance));
    setTxt("dash-stock-cost", this.formatCurrency(m.stockCostValue));
    setTxt("dash-stock-sale", this.formatCurrency(m.stockSaleValue));

    setTxt("dash-today-orders-count", `${m.todayOrdersCount} টি বিল`);
    setTxt("dash-today-expense-count", `${m.todayExpenseCount} টি খরচ এন্ট্রি`);
    setTxt("dash-due-customers-count", `${m.dueCustomersCount} জন কাস্টমার`);
    setTxt("dash-total-items-count", `${m.totalItemsQty} টি মোট পিস স্টকে (${m.totalProductsCount} পণ্য)`);
    setTxt("dash-potential-profit", `সম্ভাব্য মোট লাভ: ${this.formatCurrency(m.potentialStockProfit)}`);

    // Stock Breakdown by Product with size summary & category visuals
    const breakdownEl = document.getElementById("dash-stock-breakdown");
    if (breakdownEl) {
      breakdownEl.innerHTML = this.state.products.map(p => {
        const pQty = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
        const pCost = pQty * p.purchasePrice;
        const pSale = pQty * p.sellingPrice;
        const variantsSummary = p.variants ? p.variants.map(v => `${v.size}: ${v.qty}`).join(" | ") : "Single";
        const catVis = this.getCategoryVisual(p.category);
        return `
          <div class="stock-item-row cursor-pointer" onclick="app.openProductDetails('${p.id}')" title="বিস্তারিত দেখতে ক্লিক করুন">
            <div class="stock-item-info" style="display: flex; flex-direction: row; align-items: center; gap: 0.75rem;">
              <div class="inv-prod-thumb ${catVis.class}" style="width: 34px; height: 34px; font-size: 1.2rem;">${catVis.emoji}</div>
              <div>
                <span class="stock-item-name">${p.name}</span>
                <div class="stock-item-sub">${p.category} | সাইজ স্টক: <strong class="text-emerald">${variantsSummary}</strong></div>
              </div>
            </div>
            <div class="stock-item-stats">
              <span class="stock-qty-badge">${pQty} pcs</span>
              <span class="stock-val-text">ক্রয়: ${this.formatCurrency(pCost)} | বিক্রয়: ${this.formatCurrency(pSale)}</span>
            </div>
          </div>
        `;
      }).join("") || `<p class="text-muted text-center p-4">কোনো পণ্য পাওয়া যায়নি।</p>`;
    }

    // Size-Wise Low Stock Warnings List
    const lowStockEl = document.getElementById("dash-low-stock-list");
    const lowStockCountEl = document.getElementById("dash-low-stock-count");
    if (lowStockCountEl) lowStockCountEl.textContent = `${m.lowStockList.length} টি`;
    if (lowStockEl) {
      if (m.lowStockList.length === 0) {
        lowStockEl.innerHTML = `<p class="text-muted text-center p-3">🎉 সব পণ্যে পর্যাপ্ত স্টক রয়েছে!</p>`;
      } else {
        lowStockEl.innerHTML = m.lowStockList.map(item => `
          <div class="low-stock-card">
            <div>
              <strong>${item.productName}</strong>
              <div class="text-xs text-rose font-bold">সাইজ: ${item.size} — মাত্র ${item.qty} pcs বাকি! (সীমা: ${item.minStock})</div>
            </div>
            <div>
              <button class="btn btn-secondary btn-sm" onclick="app.openStockInForProduct('${item.productId}', '${item.size}')">+ স্টক ইন</button>
            </div>
          </div>
        `).join("");
      }
    }

    // Activity Feed
    const activityFeedEl = document.getElementById("dash-activity-feed");
    if (activityFeedEl) {
      activityFeedEl.innerHTML = this.state.activities.slice(0, 15).map(act => `
        <div class="activity-item">
          <div class="activity-icon">${act.icon || "📌"}</div>
          <div class="activity-details">
            <span class="activity-title">${act.title}</span>
            <span class="activity-time">${this.formatDate(act.date)}</span>
          </div>
          <span class="activity-amount">${act.amount || ""}</span>
        </div>
      `).join("") || `<p class="text-muted text-center p-3">কোনো কার্যক্রমের রেকর্ড নেই।</p>`;
    }

    // Top Selling Products
    const topSellersEl = document.getElementById("dash-top-sellers");
    if (topSellersEl) {
      const salesMap = {};
      this.state.sales.forEach(sale => {
        sale.items.forEach(item => {
          if (!salesMap[item.productId]) {
            salesMap[item.productId] = { name: item.productName, category: item.category, qty: 0, revenue: 0, profit: 0 };
          }
          const itemQty = item.totalQty || item.qty || 0;
          salesMap[item.productId].qty += itemQty;
          salesMap[item.productId].revenue += item.total;
          salesMap[item.productId].profit += (item.profit || 0);
        });
      });

      const topList = Object.values(salesMap).sort((a, b) => b.qty - a.qty).slice(0, 5);
      if (topList.length === 0) {
        topSellersEl.innerHTML = `<p class="text-muted text-center p-3">এখনো কোনো বিক্রয় রেকর্ড তৈরি হয়নি।</p>`;
      } else {
        topSellersEl.innerHTML = topList.map(item => `
          <div class="top-seller-row">
            <div>
              <strong>${item.name}</strong>
              <div class="text-xs text-muted">${item.category}</div>
            </div>
            <div class="text-right">
              <span class="badge badge-success">${item.qty} pcs বিক্রিত</span>
              <div class="text-xs text-emerald font-bold">${this.formatCurrency(item.revenue)}</div>
            </div>
          </div>
        `).join("");
      }
    }
  }

  // --- POS / BILLING RENDERER ---
  renderPos() {
    this.renderPosCategoryPills();
    this.renderPosProducts();
    this.renderPosCustomerDropdown();
    this.renderPosCart();
  }

  renderPosProducts() {
    const grid = document.getElementById("pos-product-grid");
    if (!grid) return;

    const searchTerm = (document.getElementById("pos-search-input")?.value || "").toLowerCase().trim();
    const activeCategory = document.querySelector("#pos-category-pills .pill.active")?.getAttribute("data-category") || "ALL";

    const filtered = this.state.products.filter(p => {
      const matchesCat = activeCategory === "ALL" || p.category === activeCategory;
      const matchesSearch = !searchTerm ||
        p.id.toLowerCase().includes(searchTerm) ||
        p.name.toLowerCase().includes(searchTerm) ||
        (p.sku && p.sku.toLowerCase().includes(searchTerm)) ||
        (p.category && p.category.toLowerCase().includes(searchTerm)) ||
        (p.variants && p.variants.some(v => v.size.toLowerCase().includes(searchTerm)));
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="card p-6 text-center text-muted" style="grid-column: 1 / -1;">
          <p>🔍 কোনো পণ্য পাওয়া যায়নি!</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const totalQty = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
      const isOutOfStock = totalQty <= 0;
      const catVis = this.getCategoryVisual(p.category);

      const variantChips = p.variants ? p.variants.map(v => `
        <span class="size-badge-pill ${v.qty <= (p.minStock || 5) ? 'is-low' : ''}">
          ${v.size}: <strong>${v.qty}</strong>
        </span>
      `).join("") : "";

      return `
        <div class="pos-prod-card ${isOutOfStock ? 'out-of-stock' : ''}" onclick="app.openPosSizePicker('${p.id}')">
          <div class="pos-prod-thumb-wrap ${catVis.class}">
            <div class="pos-prod-icon-large">${catVis.emoji}</div>
            <div class="pos-prod-badge-stack">
              <span class="pos-prod-category">${p.category}</span>
              <span class="badge ${totalQty <= (p.minStock || 5) ? 'badge-warning' : 'badge-success'} font-bold">${totalQty} pcs</span>
            </div>
          </div>
          
          <div class="pos-prod-body">
            <h4 class="pos-prod-name">${p.name}</h4>
            <div class="pos-prod-sku">ID: <span class="text-indigo font-bold">${p.id}</span> ${p.sku ? `| SKU: ${p.sku}` : ''}</div>
            
            <div class="pos-prod-variants">
              ${variantChips}
            </div>

            <div class="pos-prod-footer">
              <div class="pos-prod-cost-box">
                <div class="pos-cost-sub">ক্রয়: <strong class="text-amber font-bold">${this.formatCurrency(p.purchasePrice)}</strong></div>
                <div class="pos-price-main">${p.sellingPrice > 0 ? this.formatCurrency(p.sellingPrice) : '<span class="text-muted text-xs">ইচ্ছেমতো</span>'}</div>
              </div>
              <button type="button" class="btn btn-primary btn-sm pos-add-btn" onclick="event.stopPropagation(); app.openPosSizePicker('${p.id}')">
                + সাইজ ও বিক্রি
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  renderPosCustomerDropdown() {
    const select = document.getElementById("pos-customer-select");
    if (!select) return;

    const currentVal = select.value;
    select.innerHTML = `
      <option value="walkin">🚶 সাধারণ ক্রেতা (Walk-in Customer)</option>
      ${this.state.customers.map(c => `
        <option value="${c.id}">${c.name} (${c.phone}) ${c.due > 0 ? `[বকেয়া: ৳${c.due}]` : ''}</option>
      `).join("")}
    `;
    select.value = currentVal || "walkin";
    this.handlePosCustomerChange();
  }

  handlePosCustomerChange() {
    const select = document.getElementById("pos-customer-select");
    const alertBox = document.getElementById("pos-customer-due-alert");
    const dueValEl = document.getElementById("pos-prev-due-val");
    const dueWarningBox = document.getElementById("pos-due-warning-box");
    const dueInput = document.getElementById("pos-due-amount");
    const effectiveDue = parseFloat(dueInput?.value) || 0;

    if (dueWarningBox) {
      if (effectiveDue > 0 && (!select || select.value === "walkin")) {
        dueWarningBox.classList.remove("hidden");
      } else {
        dueWarningBox.classList.add("hidden");
      }
    }

    if (!select || !alertBox) return;

    const custId = select.value;
    if (custId && custId !== "walkin") {
      const cust = this.state.customers.find(c => c.id === custId);
      if (cust && cust.due > 0) {
        alertBox.classList.remove("hidden");
        if (dueValEl) dueValEl.textContent = this.formatCurrency(cust.due);
        return;
      }
    }
    alertBox.classList.add("hidden");
  }

  // =========================================================
  // POS SIZE-WISE QUANTITY PICKER MODAL WORKFLOW
  // =========================================================
  openPosSizePicker(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    this.currentPickerProductId = productId;

    // Check if this product is already in the cart to preserve custom price & selected sizes
    const existingCartItem = this.cart.find(item => item.productId === productId);
    const existingSizes = existingCartItem ? existingCartItem.sizes : {};
    const unitPrice = existingCartItem ? existingCartItem.unitPrice : (product.sellingPrice > 0 ? product.sellingPrice : product.purchasePrice);

    document.getElementById("pos-picker-prod-name").textContent = product.name;
    document.getElementById("pos-picker-prod-meta").textContent = `ID: ${product.id} | ক্যাটাগরি: ${product.category} ${product.sku ? `| SKU: ${product.sku}` : ''}`;

    const costBadge = document.getElementById("pos-picker-cost-badge");
    if (costBadge) costBadge.textContent = this.formatCurrency(product.purchasePrice);

    const priceInput = document.getElementById("pos-picker-unit-price");
    if (priceInput) priceInput.value = unitPrice;

    const tbody = document.getElementById("pos-picker-tbody");
    if (!tbody) return;

    const variants = product.variants && product.variants.length > 0 
      ? product.variants 
      : [{ size: "Standard", qty: product.totalStock || 0 }];

    tbody.innerHTML = variants.map(v => {
      const curSelected = existingSizes[v.size] || 0;
      const subtotal = curSelected * unitPrice;
      const isLow = v.qty <= (product.minStock || 5);

      return `
        <tr data-size="${v.size}" data-stock="${v.qty}">
          <td>
            <span class="badge badge-indigo text-sm font-bold">${v.size}</span>
          </td>
          <td>
            <strong class="${v.qty <= 0 ? 'text-rose' : (isLow ? 'text-amber' : 'text-emerald')}">${v.qty} pcs</strong>
            ${v.qty <= 0 ? '<span class="text-xs text-rose ml-1">(স্টক নেই)</span>' : ''}
          </td>
          <td>
            <div class="size-picker-qty-ctrl">
              <button type="button" onclick="app.adjustPickerQty('${v.size}', -1)">&minus;</button>
              <input type="number" class="picker-size-input" id="picker-input-${v.size}" 
                min="0" max="${v.qty}" value="${curSelected}" 
                oninput="app.calcPosPickerTotals()">
              <button type="button" onclick="app.adjustPickerQty('${v.size}', 1)">+</button>
            </div>
          </td>
          <td class="text-right font-bold picker-subtotal-cell" id="picker-subtotal-${v.size}">
            ${this.formatCurrency(subtotal)}
          </td>
        </tr>
      `;
    }).join("");

    this.calcPosPickerTotals();
    this.openModal("modal-pos-size-picker");
  }

  adjustPickerQty(size, delta) {
    const input = document.getElementById(`picker-input-${size}`);
    if (!input) return;
    const current = parseInt(input.value) || 0;
    const next = Math.max(0, current + delta);
    input.value = next;
    this.calcPosPickerTotals();
  }

  setPosPickerPrice(price) {
    const input = document.getElementById("pos-picker-unit-price");
    if (input) {
      input.value = price;
      this.calcPosPickerTotals();
    }
  }

  addPosPickerMargin(margin) {
    const product = this.state.products.find(p => p.id === this.currentPickerProductId);
    if (!product) return;
    const baseCost = product.purchasePrice || 0;
    this.setPosPickerPrice(baseCost + margin);
  }

  calcPosPickerTotals() {
    const product = this.state.products.find(p => p.id === this.currentPickerProductId);
    if (!product) return;

    const priceInput = document.getElementById("pos-picker-unit-price");
    const customPrice = Math.max(0, parseFloat(priceInput?.value) || 0);

    const unitProfit = customPrice - product.purchasePrice;
    const unitProfitEl = document.getElementById("pos-picker-unit-profit");
    if (unitProfitEl) {
      if (customPrice > 0) {
        unitProfitEl.innerHTML = `${this.formatCurrency(unitProfit)} ${unitProfit < 0 ? '<span class="text-xs text-rose font-normal">(ক্ষতি)</span>' : ''}`;
        unitProfitEl.className = `text-md font-bold ${unitProfit >= 0 ? 'text-teal' : 'text-rose'}`;
      } else {
        unitProfitEl.textContent = "৳ 0";
        unitProfitEl.className = "text-md font-bold text-muted";
      }
    }

    const rows = document.querySelectorAll("#pos-picker-tbody tr");
    let totalTaken = 0;
    let totalAmount = 0;
    let hasError = false;
    let errorMsg = "";

    rows.forEach(row => {
      const size = row.getAttribute("data-size");
      const stock = parseInt(row.getAttribute("data-stock")) || 0;
      const input = row.querySelector(".picker-size-input");
      const qty = parseInt(input?.value) || 0;

      if (qty > stock) {
        hasError = true;
        errorMsg = `${size} সাইজে পর্যাপ্ত স্টক নেই। বর্তমানে মাত্র ${stock} পিস আছে।`;
      }

      const itemTotal = qty * customPrice;
      totalTaken += qty;
      totalAmount += itemTotal;

      const subCell = document.getElementById(`picker-subtotal-${size}`);
      if (subCell) subCell.textContent = this.formatCurrency(itemTotal);
    });

    document.getElementById("pos-picker-total-qty").textContent = `${totalTaken} pcs`;
    document.getElementById("pos-picker-total-amount").textContent = this.formatCurrency(totalAmount);

    const alertBox = document.getElementById("pos-picker-alert");
    const confirmBtn = document.getElementById("pos-picker-confirm-btn");

    if (hasError) {
      alertBox.textContent = errorMsg;
      alertBox.classList.remove("hidden");
      if (confirmBtn) confirmBtn.disabled = true;
    } else {
      alertBox.classList.add("hidden");
      if (confirmBtn) confirmBtn.disabled = false;
    }
  }

  confirmPosSizePicker() {
    const product = this.state.products.find(p => p.id === this.currentPickerProductId);
    if (!product) return;

    const priceInput = document.getElementById("pos-picker-unit-price");
    const customUnitPrice = Math.max(0, parseFloat(priceInput?.value) || (priceInput?.value === "0" ? 0 : product.sellingPrice));

    const rows = document.querySelectorAll("#pos-picker-tbody tr");
    const sizesTaken = {};
    let totalQty = 0;

    for (let row of rows) {
      const size = row.getAttribute("data-size");
      const stock = parseInt(row.getAttribute("data-stock")) || 0;
      const input = row.querySelector(".picker-size-input");
      const qty = parseInt(input?.value) || 0;

      if (qty > stock) {
        this.playSound("error");
        this.showToast(`${size} সাইজে পর্যাপ্ত স্টক নেই! স্টকে মাত্র ${stock} পিস আছে।`, "error");
        return;
      }

      if (qty > 0) {
        sizesTaken[size] = qty;
        totalQty += qty;
      }
    }

    // If total quantity is 0, remove from cart if existed
    const existingIndex = this.cart.findIndex(i => i.productId === product.id);
    if (totalQty === 0) {
      if (existingIndex >= 0) {
        this.cart.splice(existingIndex, 1);
        this.showToast("পণ্য কার্ট থেকে সরিয়ে নেওয়া হয়েছে", "info");
      } else {
        this.showToast("কমপক্ষে ১টি সাইজের সংখ্যা নির্বাচন করুন!", "warning");
        return;
      }
    } else {
      // Build clean size summary string (e.g. "M: 10 | L: 5 | XL: 3")
      const sizeSummary = Object.entries(sizesTaken).map(([s, q]) => `${s}: ${q}`).join(" | ");
      const itemTotal = totalQty * customUnitPrice;
      const itemCOGS = totalQty * product.purchasePrice;
      const itemProfit = (customUnitPrice - product.purchasePrice) * totalQty;

      const cartItem = {
        productId: product.id,
        productName: product.name,
        category: product.category,
        costPrice: product.purchasePrice,
        unitPrice: customUnitPrice,
        sizes: sizesTaken,
        sizeSummary: sizeSummary,
        totalQty: totalQty,
        total: itemTotal,
        cogs: itemCOGS,
        profit: itemProfit
      };

      if (existingIndex >= 0) {
        this.cart[existingIndex] = cartItem;
      } else {
        this.cart.push(cartItem);
      }

      this.playSound("beep");
      this.showToast(`${product.name} (${sizeSummary}) [দর: ৳${customUnitPrice}] কার্টে যোগ হয়েছে!`, "success");
    }

    this.closeModal("modal-pos-size-picker");
    this.renderPosCart();
    this.renderHeader();
  }

  updateCartItemPrice(index, newPrice) {
    const item = this.cart[index];
    if (!item) return;
    const price = Math.max(0, parseFloat(newPrice) || (newPrice === "0" ? 0 : 0));
    item.unitPrice = price;
    const qty = item.totalQty || item.qty || 1;
    item.total = price * qty;
    item.profit = (price - item.costPrice) * qty;

    const totalEl = document.getElementById(`cart-item-total-${index}`);
    if (totalEl) {
      totalEl.textContent = this.formatCurrency(item.total);
    }
    this.calcPosTotals();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.renderPosCart();
    this.renderHeader();
  }

  clearCart() {
    this.cart = [];
    this.renderPosCart();
    this.renderHeader();
    this.showToast("কার্ট খালি করা হয়েছে", "success");
  }

  renderPosCart() {
    const container = document.getElementById("pos-cart-items");
    const countBadge = document.getElementById("pos-cart-badge-count");
    
    const totalItems = this.cart.reduce((sum, item) => sum + (item.totalQty || 1), 0);
    if (countBadge) {
      countBadge.textContent = `${totalItems} পণ্য`;
    }

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <p class="cart-empty-text">কার্ট খালি। বাম পাশ থেকে পণ্য সিলেক্ট করে যোগ করুন।</p>
        </div>
      `;
    } else {
      container.innerHTML = this.cart.map((item, idx) => `
        <div class="cart-item-row">
          <div class="col-item">
            <div class="cart-item-name" title="${this.escapeHtml(item.productName)}">${this.escapeHtml(item.productName)}</div>
            <div class="cart-item-meta">
              <span class="cart-item-variant">সাইজ: ${this.escapeHtml(item.sizeSummary || 'সকল')}</span>
              <button type="button" class="btn-edit-size-badge" onclick="app.openPosSizePicker('${item.productId}')" title="সাইজ পরিবর্তন করুন">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                <span>সাইজ পরিবর্তন</span>
              </button>
            </div>
          </div>
          <div class="col-qty text-center">
            <span class="cart-qty-pill">${item.totalQty} pcs</span>
          </div>
          <div class="col-price text-right">
            <div class="cart-price-wrap" title="দর / রেট পরিবর্তন করুন">
              <span class="cart-currency">৳</span>
              <input type="number" 
                     class="cart-price-input" 
                     value="${item.unitPrice}" 
                     min="0" 
                     step="1"
                     oninput="app.updateCartItemPrice(${idx}, this.value)" 
                     aria-label="বিক্রয় দর">
            </div>
          </div>
          <div class="col-total text-right font-bold text-emerald" id="cart-item-total-${idx}">${this.formatCurrency(item.total)}</div>
          <div class="col-action text-right">
            <button type="button" class="btn-cart-remove" onclick="app.removeFromCart(${idx})" title="মুছে ফেলুন" aria-label="মুছে ফেলুন">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      `).join("");
    }

    this.calcPosTotals();
  }

  calcPosTotals() {
    let subtotal = 0;
    let totalCOGS = 0;
    this.cart.forEach(i => {
      subtotal += (i.total || (i.unitPrice * i.totalQty));
      totalCOGS += (i.cogs || ((i.costPrice || 0) * (i.totalQty || i.qty || 1)));
    });

    const discountVal = parseFloat(document.getElementById("pos-discount-input")?.value) || 0;
    const discountType = document.getElementById("pos-discount-type")?.value || "fixed";
    
    let discountAmount = 0;
    if (discountType === "percent") {
      discountAmount = (subtotal * discountVal) / 100;
    } else {
      discountAmount = discountVal;
    }
    discountAmount = Math.min(subtotal, Math.max(0, discountAmount));

    const grandTotal = Math.max(0, subtotal - discountAmount);
    const estimatedProfit = Math.max(0, grandTotal - totalCOGS);

    const subtotalEl = document.getElementById("pos-subtotal");
    if (subtotalEl) subtotalEl.textContent = this.formatCurrency(subtotal);

    const profitValEl = document.getElementById("pos-cart-profit-val");
    if (profitValEl) {
      if (this.cart.length > 0) {
        profitValEl.textContent = `+ ${this.formatCurrency(estimatedProfit)}`;
      } else {
        profitValEl.textContent = "৳ 0";
      }
    }

    const discountAmountEl = document.getElementById("pos-discount-amount");
    if (discountAmountEl) discountAmountEl.textContent = `- ${this.formatCurrency(discountAmount)}`;

    const discountToggleBtn = document.getElementById("pos-discount-toggle-btn");
    if (discountToggleBtn) {
      if (discountAmount > 0) {
        discountToggleBtn.innerHTML = `ছাড় প্রযোজ্য: <strong class="text-rose">-${this.formatCurrency(discountAmount)}</strong> (এডিট)`;
      } else {
        discountToggleBtn.textContent = "+ বিশেষ ছাড় / ডিসকাউন্ট (যদি থাকে)";
      }
    }

    const grandTotalEl = document.getElementById("pos-grand-total");
    if (grandTotalEl) grandTotalEl.textContent = this.formatCurrency(grandTotal);

    const activePayMethod = document.querySelector("#pos-payment-pills .pay-pill.active")?.getAttribute("data-method") || "cash";
    const singlePayBox = document.getElementById("pos-single-pay-box");
    const splitBox = document.getElementById("pos-split-box");
    const trxGroup = document.getElementById("pos-trx-group");
    const paidLabel = document.getElementById("pos-paid-label");
    const paidInput = document.getElementById("pos-paid-amount");
    const dueInput = document.getElementById("pos-due-amount");
    const payStatusEl = document.getElementById("pos-pay-method-status");

    if (payStatusEl) {
      const statusMap = {
        cash: "নগদ (Cash)",
        due: "বাকি (Due)",
        bkash: "বিকাশ (bKash)",
        nagad: "নগদ (Nagad)",
        bank: "কার্ড / ব্যাংক (Card/Bank)",
        split: "স্প্লিট (Split Pay)"
      };
      payStatusEl.textContent = statusMap[activePayMethod] || "নগদ (Cash)";
    }

    if (activePayMethod === "split") {
      if (singlePayBox) singlePayBox.classList.add("hidden");
      if (splitBox) splitBox.classList.remove("hidden");

      const cAmt = Math.max(0, parseFloat(document.getElementById("pos-split-cash")?.value) || 0);
      const bAmt = Math.max(0, parseFloat(document.getElementById("pos-split-bkash")?.value) || 0);
      const nAmt = Math.max(0, parseFloat(document.getElementById("pos-split-nagad")?.value) || 0);
      const kAmt = Math.max(0, parseFloat(document.getElementById("pos-split-bank")?.value) || 0);
      
      const totalSplitPaid = cAmt + bAmt + nAmt + kAmt;
      const remainingDue = Math.max(0, grandTotal - totalSplitPaid);

      const splitTotalEl = document.getElementById("pos-split-total-paid");
      const splitDueEl = document.getElementById("pos-split-remaining-due");
      if (splitTotalEl) splitTotalEl.textContent = this.formatCurrency(totalSplitPaid);
      if (splitDueEl) splitDueEl.textContent = this.formatCurrency(remainingDue);

      if (paidInput) paidInput.value = totalSplitPaid;
      if (dueInput) dueInput.value = remainingDue;
    } else {
      if (singlePayBox) singlePayBox.classList.remove("hidden");
      if (splitBox) splitBox.classList.add("hidden");

      // Configure TrxID visibility and label
      if (trxGroup) {
        if (activePayMethod === "bkash" || activePayMethod === "nagad" || activePayMethod === "bank") {
          trxGroup.classList.remove("hidden");
          const trxLabel = document.getElementById("pos-trx-label");
          if (trxLabel) {
            trxLabel.textContent = activePayMethod === "bkash" ? "bKash TrxID / নম্বর (ঐচ্ছিক):" : (activePayMethod === "nagad" ? "Nagad TrxID / নম্বর (ঐচ্ছিক):" : "Bank / Card Trx Ref (ঐচ্ছিক):");
          }
        } else {
          trxGroup.classList.add("hidden");
        }
      }

      if (paidLabel) {
        paidLabel.textContent = activePayMethod === "bkash" ? "বিকাশ জমা (bKash Paid ৳):" : (activePayMethod === "nagad" ? "নগদ জমা (Nagad Paid ৳):" : (activePayMethod === "bank" ? "ব্যাংক জমা (Bank Paid ৳):" : (activePayMethod === "due" ? "জমা টাকা (Paid ৳):" : "নগদ জমা (Cash Paid ৳):")));
      }

      if (activePayMethod === "due") {
        if (paidInput) {
          paidInput.value = 0;
          paidInput.setAttribute("data-auto", "false");
        }
        if (dueInput) dueInput.value = grandTotal;
      } else {
        const curPaid = parseFloat(paidInput?.value);
        // Default to grand total if unassigned or previously matched old total
        const paidVal = (isNaN(curPaid) || paidInput?.getAttribute("data-auto") === "true") ? grandTotal : Math.min(grandTotal, Math.max(0, curPaid));
        if (paidInput) {
          paidInput.value = paidVal;
          paidInput.setAttribute("data-auto", paidVal === grandTotal ? "true" : "false");
        }
        const remainingDue = Math.max(0, grandTotal - paidVal);
        if (dueInput) dueInput.value = remainingDue;
      }

      // Check due warning box
      const effectiveDue = parseFloat(dueInput?.value) || 0;
      const custSelect = document.getElementById("pos-customer-select");
      const dueWarningBox = document.getElementById("pos-due-warning-box");
      if (dueWarningBox) {
        if (effectiveDue > 0 && (!custSelect || custSelect.value === "walkin")) {
          dueWarningBox.classList.remove("hidden");
        } else {
          dueWarningBox.classList.add("hidden");
        }
      }
    }

    // Sync Mobile Floating Cart Bar
    const floatingBar = document.getElementById("pos-mobile-floating-bar");
    const floatingCount = document.getElementById("pos-floating-items-count");
    const floatingAmount = document.getElementById("pos-floating-total-amount");
    const totalCartPcs = this.cart.reduce((sum, item) => sum + (item.totalQty || item.qty || 0), 0);

    if (floatingCount) floatingCount.textContent = `${totalCartPcs} টি পণ্য কার্টে (${this.cart.length} আইটেম)`;
    if (floatingAmount) floatingAmount.textContent = this.formatCurrency(grandTotal);

    if (floatingBar) {
      if (this.cart.length > 0 && this.mobilePosTab !== "cart") {
        floatingBar.classList.remove("hidden");
      } else {
        floatingBar.classList.add("hidden");
      }
    }
  }

  toggleDiscountBox() {
    const box = document.getElementById("pos-discount-box");
    if (!box) return;
    const isHidden = box.classList.contains("hidden");
    if (isHidden) {
      box.classList.remove("hidden");
      document.getElementById("pos-discount-input")?.focus();
    } else {
      box.classList.add("hidden");
    }
  }

  removeDiscount() {
    const input = document.getElementById("pos-discount-input");
    if (input) input.value = 0;
    const box = document.getElementById("pos-discount-box");
    if (box) box.classList.add("hidden");
    const btn = document.getElementById("pos-discount-toggle-btn");
    if (btn) btn.textContent = "+ বিশেষ ছাড় / ডিসকাউন্ট (যদি থাকে)";
    this.calcPosTotals();
  }

  // =========================================================
  // POS CHECKOUT & EXACT SIZE DEDUCTION
  // =========================================================
  handlePosCheckout() {
    if (this.cart.length === 0) {
      this.playSound("error");
      this.showToast("কার্টে কোনো পণ্য নেই! আগে পণ্য যোগ করুন।", "warning");
      return;
    }

    const customerSelect = document.getElementById("pos-customer-select");
    const customerId = customerSelect ? customerSelect.value : "walkin";
    let customerName = "Walk-in Customer";
    let customerPhone = "--";
    let customer = null;

    if (customerId !== "walkin") {
      customer = this.state.customers.find(c => c.id === customerId);
      if (customer) {
        customerName = customer.name;
        customerPhone = customer.phone;
      }
    }

    // Verify stock availability across all sizes before saving
    for (let cartItem of this.cart) {
      const prod = this.state.products.find(p => p.id === cartItem.productId);
      if (!prod) continue;

      for (let [size, qtyTaken] of Object.entries(cartItem.sizes)) {
        const variantObj = prod.variants ? prod.variants.find(v => v.size === size) : null;
        const available = variantObj ? Number(variantObj.qty) : (prod.totalStock || 0);

        if (qtyTaken > available) {
          this.playSound("error");
          this.showToast(`ত্রুটি: ${prod.name} এর ${size} সাইজে পর্যাপ্ত স্টক নেই! স্টকে মাত্র ${available} পিস আছে।`, "error");
          return;
        }
      }
    }

    let subtotal = 0;
    let totalCOGS = 0;
    const saleItems = [];

    this.cart.forEach(item => {
      subtotal += item.total;
      totalCOGS += item.cogs;
      saleItems.push(JSON.parse(JSON.stringify(item)));
    });

    const discountVal = parseFloat(document.getElementById("pos-discount-input")?.value) || 0;
    const discountType = document.getElementById("pos-discount-type")?.value || "fixed";
    const discountAmount = discountType === "percent" ? (subtotal * discountVal) / 100 : discountVal;
    const grandTotal = Math.max(0, subtotal - discountAmount);

    const payMethod = document.querySelector("#pos-payment-pills .pay-pill.active")?.getAttribute("data-method") || "cash";
    const trxId = document.getElementById("pos-trx-id")?.value.trim() || "";
    let paidBreakdown = {};
    let totalPaid = 0;

    if (payMethod === "split") {
      const cAmt = Math.max(0, parseFloat(document.getElementById("pos-split-cash")?.value) || 0);
      const bAmt = Math.max(0, parseFloat(document.getElementById("pos-split-bkash")?.value) || 0);
      const nAmt = Math.max(0, parseFloat(document.getElementById("pos-split-nagad")?.value) || 0);
      const kAmt = Math.max(0, parseFloat(document.getElementById("pos-split-bank")?.value) || 0);
      paidBreakdown = { cash: cAmt, bkash: bAmt, nagad: nAmt, bank: kAmt };
      totalPaid = cAmt + bAmt + nAmt + kAmt;
    } else if (payMethod === "due") {
      paidBreakdown = { due: 0 };
      totalPaid = 0;
    } else {
      const singlePaid = Math.min(grandTotal, Math.max(0, parseFloat(document.getElementById("pos-paid-amount")?.value) || 0));
      paidBreakdown = { [payMethod]: singlePaid };
      totalPaid = singlePaid;
    }

    const paidAmount = Math.min(grandTotal, totalPaid);
    const dueAmount = Math.max(0, grandTotal - paidAmount);

    if (dueAmount > 0 && customerId === "walkin") {
      this.playSound("error");
      this.openConfirmModal(`⚠️ বকেয়া (৳${this.formatCurrency(dueAmount)}) বিক্রির জন্য কাস্টমারের নাম ও মোবাইল নম্বর সংরক্ষণ করা প্রয়োজন। আপনি কি এখনই কাস্টমার যুক্ত করতে চান?`, () => {
        document.getElementById("cust-modal-title").textContent = "নতুন কাস্টমার যোগ (বকেয়া বিক্রির জন্য)";
        document.getElementById("cust-form-id").value = "";
        document.getElementById("cust-name").value = "";
        document.getElementById("cust-phone").value = "";
        document.getElementById("cust-address").value = "";
        document.getElementById("cust-initial-due").parentElement.classList.add("hidden");
        this.openModal("modal-add-customer");
      });
      return;
    }

    const grossProfit = grandTotal - totalCOGS;
    const saleId = this.generateId("SALE");
    const saleDate = new Date().toISOString();

    // 1. DEDUCT EXACT SIZE-WISE STOCK & LOG MOVEMENT
    saleItems.forEach(cartItem => {
      const prod = this.state.products.find(p => p.id === cartItem.productId);
      if (prod) {
        Object.entries(cartItem.sizes).forEach(([size, qtyTaken]) => {
          if (prod.variants) {
            const v = prod.variants.find(x => x.size === size);
            if (v) {
              const prevStock = v.qty;
              v.qty = Math.max(0, v.qty - qtyTaken);
              const newStock = v.qty;

              this.state.stockMovements.unshift({
                id: this.generateId("MOV"),
                date: saleDate,
                productId: prod.id,
                productName: prod.name,
                variant: size,
                change: -qtyTaken,
                prevStock: prevStock,
                newStock: newStock,
                reason: `বিক্রয় (Sale ${saleId}) কাস্টমার: ${customerName}`,
                refId: saleId
              });
            }
          }
        });
        // Recalculate total product stock automatically
        prod.totalStock = prod.variants ? prod.variants.reduce((a, b) => a + Number(b.qty), 0) : 0;
      }
    });

    // 2. CREATE SALE RECORD
    const saleRecord = {
      id: saleId,
      date: saleDate,
      customerId: customerId,
      customerName: customerName,
      customerPhone: customerPhone,
      items: saleItems,
      subtotal: subtotal,
      discount: discountAmount,
      grandTotal: grandTotal,
      totalCOGS: totalCOGS,
      grossProfit: grossProfit,
      paymentMethod: payMethod,
      paidBreakdown: paidBreakdown,
      trxId: trxId,
      paidAmount: paidAmount,
      dueAmount: dueAmount,
      status: dueAmount > 0 ? (paidAmount > 0 ? "PARTIAL_DUE" : "FULL_DUE") : "PAID"
    };

    this.state.sales.unshift(saleRecord);

    // 3. UPDATE CUSTOMER DUE LEDGER WITH SIZE BREAKDOWN
    if (customer) {
      customer.totalPurchased = (customer.totalPurchased || 0) + grandTotal;
      customer.totalPaid = (customer.totalPaid || 0) + paidAmount;
      customer.due = (customer.due || 0) + dueAmount;

      const itemsDescription = saleItems.map(i => `${i.productName} (${i.sizeSummary})`).join(" + ");

      if (!customer.ledger) customer.ledger = [];
      customer.ledger.unshift({
        id: this.generateId("LEDG"),
        date: saleDate,
        type: `কেনাকাটা: ${itemsDescription}`,
        refId: saleId,
        purchaseAmount: grandTotal,
        paidAmount: paidAmount,
        dueBalance: customer.due
      });
    }

    // 4. UPDATE MULTI-ACCOUNT REGISTERS (Cash, bKash, Nagad, Bank)
    Object.entries(paidBreakdown).forEach(([accountKey, amount]) => {
      if (amount > 0 && accountKey !== "due") {
        const prevBal = this.getAccountBalance(accountKey);
        const accountLabel = accountKey === "bkash" ? "বিকাশ (bKash)" : (accountKey === "nagad" ? "নগদ (Nagad)" : (accountKey === "bank" ? "ব্যাংক (Bank)" : "ক্যাশ (Cash)"));
        
        this.state.cashTransactions.unshift({
          id: this.generateId("TX"),
          date: saleDate,
          account: accountKey,
          type: `${accountLabel} Sale`,
          refId: saleId,
          trxId: trxId || undefined,
          description: `${accountLabel} বিক্রি - ${customerName} (${saleItems.length} আইটেম)${trxId ? ` [TrxID: ${trxId}]` : ''}`,
          in: amount,
          out: 0,
          balance: prevBal + amount
        });
      }
    });

    // 5. ACTIVITY LOG
    const activitySummary = saleItems.map(i => `${i.productName} [${i.sizeSummary}]`).join(", ");
    this.addActivity("🛒", `বিক্রি সম্পন্ন: ${activitySummary} (${customerName}) [${payMethod.toUpperCase()}]`, this.formatCurrency(grandTotal));

    this.saveState();
    this.playSound("success");
    this.showToast(`বিক্রি সফলভাবে সম্পন্ন হয়েছে! ইনভয়েস: ${saleId}`, "success");

    this.cart = [];
    if (document.getElementById("pos-discount-input")) document.getElementById("pos-discount-input").value = 0;
    if (document.getElementById("pos-trx-id")) document.getElementById("pos-trx-id").value = "";
    if (document.getElementById("pos-split-cash")) document.getElementById("pos-split-cash").value = 0;
    if (document.getElementById("pos-split-bkash")) document.getElementById("pos-split-bkash").value = 0;
    if (document.getElementById("pos-split-nagad")) document.getElementById("pos-split-nagad").value = 0;
    if (document.getElementById("pos-split-bank")) document.getElementById("pos-split-bank").value = 0;

    this.renderAll();

    // Show printable invoice
    this.showInvoiceModal(saleRecord);
  }

  showInvoiceModal(sale) {
    const container = document.getElementById("printable-invoice");
    if (!container) return;

    const s = this.state.settings;
    container.innerHTML = `
      <div class="invoice-header">
        <h2 class="invoice-shop-name">${s.shopName || "FAIZA ZONE"}</h2>
        <div class="invoice-meta">${s.tagline || "Clothing & Fashion Retail"}</div>
        <div class="invoice-meta">${s.address || ""} | ফোন: ${s.phone || ""}</div>
      </div>

      <div class="invoice-customer-box">
        <div class="flex-wrap justify-between">
          <div><strong>ক্যাশ মেমো নং:</strong> ${sale.id}</div>
          <div><strong>তারিখ:</strong> ${this.formatDate(sale.date)}</div>
        </div>
        <div><strong>কাস্টমার:</strong> ${sale.customerName} ${sale.customerPhone !== '--' ? `(${sale.customerPhone})` : ''}</div>
        <div><strong>পেমেন্ট মাধ্যম:</strong> ${sale.paidBreakdown && Object.keys(sale.paidBreakdown).length > 0 
          ? Object.entries(sale.paidBreakdown).filter(([_, a]) => a > 0).map(([k, a]) => `${k === 'bkash' ? 'বিকাশ' : (k === 'nagad' ? 'নগদ' : (k === 'bank' ? 'ব্যাংক' : 'ক্যাশ'))}: ৳${a}`).join(' + ') + (sale.dueAmount > 0 ? ` + বাকি: ৳${sale.dueAmount}` : '') + (sale.trxId ? ` [TrxID: ${sale.trxId}]` : '')
          : (sale.paymentMethod ? sale.paymentMethod.toUpperCase() : 'CASH')}</div>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th>বিবরণ</th>
            <th>সাইজ বণ্টন</th>
            <th class="text-right">মোট পিস</th>
            <th class="text-right">দর</th>
            <th class="text-right">মোট মূল্য</th>
          </tr>
        </thead>
        <tbody>
          ${sale.items.map(i => `
            <tr>
              <td><strong>${i.productName}</strong></td>
              <td>${i.sizeSummary}</td>
              <td class="text-right">${i.totalQty || i.qty}</td>
              <td class="text-right">${i.unitPrice}</td>
              <td class="text-right">${i.total}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div class="invoice-totals-box">
        <div class="invoice-total-row">
          <span>সাবটোটাল:</span>
          <strong>${this.formatCurrency(sale.subtotal)}</strong>
        </div>
        ${sale.discount > 0 ? `
          <div class="invoice-total-row text-rose">
            <span>ডিসকাউন্ট:</span>
            <span>- ${this.formatCurrency(sale.discount)}</span>
          </div>
        ` : ''}
        <div class="invoice-total-row invoice-grand-total">
          <span>সর্বমোট (Grand Total):</span>
          <span>${this.formatCurrency(sale.grandTotal)}</span>
        </div>
        <div class="invoice-total-row text-emerald font-bold">
          <span>পরিশোধ (Paid):</span>
          <span>${this.formatCurrency(sale.paidAmount)}</span>
        </div>
        ${sale.dueAmount > 0 ? `
          <div class="invoice-total-row text-amber font-bold">
            <span>বকেয়া (Due):</span>
            <span>${this.formatCurrency(sale.dueAmount)}</span>
          </div>
        ` : ''}
      </div>

      <div class="invoice-footer">
        <p>${s.invoiceFooter || "আমাদের সাথে থাকার জন্য ধন্যবাদ। আবার আসবেন!"}</p>
        <p class="text-xs text-muted mt-2">Software by Faiza Zone Hisab App</p>
      </div>
    `;

    this.openModal("modal-invoice");
  }

  printInvoice(format) {
    window.print();
  }

  // =========================================================
  // INVENTORY VIEW & PRODUCT DETAILS
  // =========================================================
  renderInventory() {
    this.renderInventoryCategoryFilter();
    const tbody = document.getElementById("inventory-table-body");
    if (!tbody) return;

    const searchTerm = (document.getElementById("inv-search-input")?.value || "").toLowerCase().trim();
    const catFilter = document.getElementById("inv-category-filter")?.value || "ALL";
    const stockFilter = document.getElementById("inv-stock-filter")?.value || "ALL";

    let totalCost = 0;
    let totalSale = 0;
    let totalQty = 0;
    let lowCount = 0;

    const filtered = this.state.products.filter(p => {
      const pQty = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
      
      const matchesCat = catFilter === "ALL" || p.category === catFilter;
      const matchesSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchTerm) ||
        (p.sku && p.sku.toLowerCase().includes(searchTerm)) ||
        p.category.toLowerCase().includes(searchTerm) ||
        (p.variants && p.variants.some(v => v.size.toLowerCase().includes(searchTerm)));
      
      const isLow = p.variants ? p.variants.some(v => Number(v.qty) <= (p.minStock || 5)) : pQty <= (p.minStock || 5);

      let matchesStock = true;
      if (stockFilter === "low") matchesStock = isLow && pQty > 0;
      else if (stockFilter === "in_stock") matchesStock = pQty > 0;
      else if (stockFilter === "out_of_stock") matchesStock = pQty === 0;

      return matchesCat && matchesSearch && matchesStock;
    });

    this.state.products.forEach(p => {
      const q = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
      totalCost += (q * p.purchasePrice);
      totalSale += (q * p.sellingPrice);
      totalQty += q;
      if (p.variants ? p.variants.some(v => Number(v.qty) <= (p.minStock || 5)) : q <= (p.minStock || 5)) {
        lowCount++;
      }
    });

    document.getElementById("inv-total-cost").textContent = this.formatCurrency(totalCost);
    document.getElementById("inv-total-sale").textContent = this.formatCurrency(totalSale);
    document.getElementById("inv-potential-profit").textContent = this.formatCurrency(totalSale - totalCost);
    document.getElementById("inv-total-qty").textContent = `${totalQty} টি মোট পিস`;
    document.getElementById("inv-low-stock-count").textContent = lowCount;

    // Mobile Stock Cards Renderer (Mockup 4)
    const mobileCardsList = document.getElementById("inv-mobile-cards-list");
    if (mobileCardsList) {
      if (filtered.length === 0) {
        mobileCardsList.innerHTML = `<div class="card p-4 text-center text-muted">🔍 কোনো পণ্য পাওয়া যায়নি!</div>`;
      } else {
        mobileCardsList.innerHTML = filtered.map(p => {
          const pQty = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
          const sizeBreakdown = p.variants ? p.variants.map(v => `${v.size}:${v.qty}`).join(" | ") : `${pQty} pcs`;
          const iconEmoji = p.category === "T-Shirt" ? "👕" : (p.category === "Shirt" ? "👔" : (p.category === "Pants" ? "👖" : (p.category === "Kids" ? "🧸" : "🛍️")));
          return `
            <div class="stock-card-mobile" onclick="app.openProductDetails('${p.id}')">
              <div class="pos-prod-thumb-box">${iconEmoji}</div>
              <div class="stock-card-body">
                <div class="stock-card-title">${p.name}</div>
                <div class="stock-card-sku">SKU: ${p.sku || p.id} | ${p.category}</div>
                <div class="stock-card-sizes-pill">স্টক: ${pQty} pcs (${sizeBreakdown})</div>
                <div class="stock-card-prices">ক্রয়: <strong>${this.formatCurrency(p.purchasePrice)}</strong> | বিক্রয়: <strong class="text-emerald">${this.formatCurrency(p.sellingPrice)}</strong></div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          `;
        }).join("");
      }
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="text-center p-6 text-muted">কোনো পণ্য পাওয়া যায়নি!</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => {
      const pQty = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
      const itemCost = pQty * p.purchasePrice;
      const itemSale = pQty * p.sellingPrice;
      const isAnySizeLow = p.variants ? p.variants.some(v => Number(v.qty) <= (p.minStock || 5)) : pQty <= (p.minStock || 5);

      const variantsHtml = p.variants ? p.variants.map(v => `
        <span class="size-badge-pill ${v.qty <= (p.minStock || 5) ? 'is-low' : ''}">
          ${v.size}: <strong>${v.qty}</strong>
        </span>
      `).join(" ") : `<span class="text-muted">Single</span>`;

      const catVis = this.getCategoryVisual(p.category);
      return `
        <tr>
          <td>
            <div class="inv-prod-cell">
              <div class="inv-prod-thumb ${catVis.class}">${catVis.emoji}</div>
              <div>
                <div class="font-bold cursor-pointer text-main" onclick="app.openProductDetails('${p.id}')">${p.name}</div>
                <div class="text-xs text-muted">SKU: ${p.sku || "--"} | ব্র্যান্ড: ${p.brand || "Faiza Zone"}</div>
              </div>
            </div>
          </td>
          <td><span class="badge badge-indigo font-bold">${p.category}</span></td>
          <td><div class="flex-wrap gap-1">${variantsHtml}</div></td>
          <td class="font-bold">${this.formatCurrency(p.purchasePrice)}</td>
          <td class="font-bold text-emerald">${this.formatCurrency(p.sellingPrice)}</td>
          <td><strong class="text-lg ${isAnySizeLow ? 'text-rose' : 'text-emerald'}">${pQty}</strong> pcs</td>
          <td>${this.formatCurrency(itemCost)}</td>
          <td class="text-emerald font-bold">${this.formatCurrency(itemSale)}</td>
          <td>
            <span class="badge ${pQty === 0 ? 'badge-danger' : (isAnySizeLow ? 'badge-warning' : 'badge-success')}">
              ${pQty === 0 ? 'স্টক শেষ' : (isAnySizeLow ? '⚠️ কম স্টক' : 'ইন স্টক')}
            </span>
          </td>
          <td>
            <div class="table-action-group">
              <button class="btn-action btn-action-info" onclick="app.openProductDetails('${p.id}')" title="বিস্তারিত">👁️ বিস্তারিত</button>
              <button class="btn-action btn-action-primary" onclick="app.openStockInForProduct('${p.id}')" title="স্টক ইন">+ স্টক</button>
              <button class="btn-action btn-action-icon-only" onclick="app.openEditProductModal('${p.id}')" title="এডিট">✏️</button>
              <button class="btn-action btn-action-danger btn-action-icon-only" onclick="app.confirmDeleteProduct('${p.id}')" title="মুছে ফেলুন">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  // --- PRODUCT DETAILS DASHBOARD MODAL ---
  openProductDetails(productId) {
    const p = this.state.products.find(prod => prod.id === productId);
    if (!p) return;

    document.getElementById("prod-details-name").textContent = p.name;
    document.getElementById("prod-details-sku").textContent = `SKU: ${p.sku || "--"} | ক্যাটাগরি: ${p.category} | ব্র্যান্ড: ${p.brand || "Faiza Zone"}`;

    const totalStock = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
    const costValue = totalStock * p.purchasePrice;
    const saleValue = totalStock * p.sellingPrice;
    const profitMargin = p.sellingPrice - p.purchasePrice;
    const totalPotentialProfit = totalStock * profitMargin;

    // Calculate total sold pieces for this product from sales history
    let totalSoldPieces = 0;
    let totalRevenueGenerated = 0;
    const productSales = [];

    this.state.sales.forEach(sale => {
      sale.items.forEach(item => {
        if (item.productId === p.id) {
          const itemQty = item.totalQty || item.qty || 0;
          totalSoldPieces += itemQty;
          totalRevenueGenerated += item.total;
          productSales.push({
            date: sale.date,
            saleId: sale.id,
            customerName: sale.customerName,
            sizesTaken: item.sizeSummary || `${item.size}: ${itemQty}`,
            qty: itemQty,
            total: item.total
          });
        }
      });
    });

    // 1. Metric Cards
    const metricsContainer = document.getElementById("prod-details-metrics");
    if (metricsContainer) {
      metricsContainer.innerHTML = `
        <div class="metric-card gradient-violet">
          <span class="metric-title">বর্তমান মোট স্টক (Total Stock)</span>
          <div class="metric-value">${totalStock} pcs</div>
          <span class="metric-footer text-emerald">বিক্রিত হয়েছে: ${totalSoldPieces} pcs</span>
        </div>
        <div class="metric-card gradient-blue">
          <span class="metric-title">স্টক ক্রয়মূল্য (Cost Value)</span>
          <div class="metric-value">${this.formatCurrency(costValue)}</div>
          <span class="metric-footer">প্রতি পিস: ৳${p.purchasePrice}</span>
        </div>
        <div class="metric-card gradient-emerald">
          <span class="metric-title">সম্ভাব্য মোট বিক্রয় (Sale Value)</span>
          <div class="metric-value text-emerald">${this.formatCurrency(saleValue)}</div>
          <span class="metric-footer">প্রতি পিস: ৳${p.sellingPrice}</span>
        </div>
        <div class="metric-card gradient-teal">
          <span class="metric-title">সম্ভাব্য মোট লাভ (Profit)</span>
          <div class="metric-value text-teal">${this.formatCurrency(totalPotentialProfit)}</div>
          <span class="metric-footer">পিস প্রতি লাভ: ৳${profitMargin}</span>
        </div>
      `;
    }

    // 2. Size-wise Stock Breakdown Cards
    const sizesGrid = document.getElementById("prod-details-sizes-grid");
    if (sizesGrid) {
      if (p.variants && p.variants.length > 0) {
        sizesGrid.innerHTML = p.variants.map(v => {
          const isLow = v.qty <= (p.minStock || 5);
          return `
            <div class="size-detail-card ${isLow ? 'low-stock' : ''}">
              <div class="size-name">${v.size}</div>
              <div class="size-stock-count ${isLow ? 'text-rose' : 'text-emerald'}">${v.qty} pcs</div>
              <div class="size-status">
                <span class="badge ${v.qty <= 0 ? 'badge-danger' : (isLow ? 'badge-warning' : 'badge-success')}">
                  ${v.qty <= 0 ? 'স্টক শেষ' : (isLow ? '⚠️ কম স্টক' : 'ইন স্টক')}
                </span>
              </div>
            </div>
          `;
        }).join("");
      } else {
        sizesGrid.innerHTML = `<p class="text-muted">কোনো নির্দিষ্ট সাইজ নেই। মোট স্টক: ${totalStock} pcs</p>`;
      }
    }

    // 3. Product Sales History Table
    const salesTbody = document.getElementById("prod-details-sales-tbody");
    if (salesTbody) {
      if (productSales.length === 0) {
        salesTbody.innerHTML = `<tr><td colspan="6" class="text-center p-4 text-muted">এই পণ্যের কোনো বিক্রয় রেকর্ড তৈরি হয়নি।</td></tr>`;
      } else {
        salesTbody.innerHTML = productSales.map(s => `
          <tr>
            <td>${this.formatDate(s.date)}</td>
            <td><strong>${s.saleId}</strong></td>
            <td>${s.customerName}</td>
            <td><span class="badge badge-indigo">${s.sizesTaken}</span></td>
            <td class="font-bold">${s.qty} pcs</td>
            <td class="font-bold text-emerald">${this.formatCurrency(s.total)}</td>
          </tr>
        `).join("");
      }
    }

    // Action buttons in modal footer
    const stockInBtn = document.getElementById("prod-details-stockin-btn");
    const editBtn = document.getElementById("prod-details-edit-btn");
    if (stockInBtn) {
      stockInBtn.onclick = () => {
        this.closeModal("modal-product-details");
        this.openStockInForProduct(p.id);
      };
    }
    if (editBtn) {
      editBtn.onclick = () => {
        this.closeModal("modal-product-details");
        this.openEditProductModal(p.id);
      };
    }

    this.openModal("modal-product-details");
  }

  // =========================================================
  // CATEGORY DYNAMICS & HELPERS
  // =========================================================
  getAllCategories() {
    const defaultCats = [
      "Shirt",
      "T-Shirt",
      "Polo",
      "Pants",
      "Jeans",
      "Panjabi",
      "Kabli",
      "Three Piece",
      "Kids",
      "Others"
    ];
    const stateCats = Array.isArray(this.state.categories) ? this.state.categories : [];
    const prodCats = Array.isArray(this.state.products) ? this.state.products.map(p => p.category).filter(Boolean) : [];
    return Array.from(new Set([...defaultCats, ...stateCats, ...prodCats]));
  }

  renderProductModalCategories(selectedVal = "Shirt") {
    const select = document.getElementById("prod-category");
    if (!select) return;
    const cats = this.getAllCategories();
    let html = "";
    cats.forEach(c => {
      html += `<option value="${c}">${c}</option>`;
    });
    html += `<option value="__NEW_CAT__">➕ + নতুন ক্যাটাগরি লিখুন (+ Add New)</option>`;
    select.innerHTML = html;

    if (selectedVal && cats.includes(selectedVal)) {
      select.value = selectedVal;
    } else if (cats.length > 0) {
      select.value = cats[0];
    }
  }

  renderPosCategoryPills() {
    const container = document.getElementById("pos-category-pills");
    if (!container) return;
    const currentActive = container.querySelector(".pill.active")?.getAttribute("data-category") || "ALL";
    const cats = this.getAllCategories();

    let html = `<button class="pill ${currentActive === 'ALL' ? 'active' : ''}" data-category="ALL" data-i18n="allCategories">সব পণ্য</button>`;
    cats.forEach(c => {
      html += `<button class="pill ${currentActive === c ? 'active' : ''}" data-category="${c}">${c}</button>`;
    });
    container.innerHTML = html;

    container.querySelectorAll(".pill").forEach(pill => {
      pill.addEventListener("click", () => {
        container.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.renderPosProducts();
      });
    });
  }

  renderInventoryCategoryFilter() {
    const select = document.getElementById("inv-category-filter");
    if (!select) return;
    const currentVal = select.value || "ALL";
    const cats = this.getAllCategories();
    let html = `<option value="ALL">সব ক্যাটাগরি</option>`;
    cats.forEach(c => {
      html += `<option value="${c}">${c}</option>`;
    });
    select.innerHTML = html;
    if (currentVal && cats.includes(currentVal)) {
      select.value = currentVal;
    } else {
      select.value = "ALL";
    }
  }

  toggleNewCategoryInput(show) {
    const wrap = document.getElementById("category-custom-wrap");
    const input = document.getElementById("custom-category-input");
    const select = document.getElementById("prod-category");
    if (!wrap) return;

    if (show) {
      wrap.classList.remove("hidden");
      if (input) {
        input.value = "";
        input.focus();
      }
    } else {
      wrap.classList.add("hidden");
      if (input) input.value = "";
      if (select && select.value === "__NEW_CAT__") {
        select.value = this.getAllCategories()[0] || "Shirt";
      }
    }
  }

  handleCategorySelectChange(val) {
    if (val === "__NEW_CAT__") {
      this.toggleNewCategoryInput(true);
    } else {
      this.toggleNewCategoryInput(false);
    }
  }

  saveCustomCategory() {
    const input = document.getElementById("custom-category-input");
    if (!input) return;
    const newCat = input.value.trim();
    if (!newCat) {
      this.showToast("ক্যাটাগরির নাম লিখুন!", "warning");
      input.focus();
      return;
    }

    if (!Array.isArray(this.state.categories)) {
      this.state.categories = [];
    }
    if (!this.state.categories.includes(newCat)) {
      this.state.categories.push(newCat);
    }

    this.saveState();
    this.renderProductModalCategories(newCat);
    this.renderPosCategoryPills();
    this.renderInventoryCategoryFilter();
    this.toggleNewCategoryInput(false);
    this.playSound("success");
    this.showToast(`"${newCat}" ক্যাটাগরি সফলভাবে যুক্ত হয়েছে!`, "success");
  }

  // =========================================================
  // PRODUCT CRUD & DYNAMIC SIZE MATRIX BUILDER
  // =========================================================
  openAddProductModal() {
    document.getElementById("product-modal-title").textContent = "নতুন পণ্য যোগ করুন";
    document.getElementById("product-form-id").value = "";
    document.getElementById("prod-name").value = "";
    this.renderProductModalCategories("Shirt");
    this.toggleNewCategoryInput(false);
    document.getElementById("prod-brand").value = "Faiza Zone";
    document.getElementById("prod-sku").value = "";
    document.getElementById("prod-purchase-price").value = "";
    const sellingInput = document.getElementById("prod-selling-price");
    if (sellingInput) sellingInput.value = "";
    document.getElementById("prod-min-stock").value = "5";
    document.getElementById("prod-notes").value = "";

    // Default preset sizes
    this.renderVariantRows([
      { size: "M", qty: 50 },
      { size: "L", qty: 60 },
      { size: "XL", qty: 38 }
    ]);

    this.openModal("modal-add-product");
  }

  openEditProductModal(productId) {
    const prod = this.state.products.find(p => p.id === productId);
    if (!prod) return;

    document.getElementById("product-modal-title").textContent = "পণ্য সম্পাদনা (Edit Product)";
    document.getElementById("product-form-id").value = prod.id;
    document.getElementById("prod-name").value = prod.name;
    this.renderProductModalCategories(prod.category);
    this.toggleNewCategoryInput(false);
    document.getElementById("prod-brand").value = prod.brand || "";
    document.getElementById("prod-sku").value = prod.sku || "";
    document.getElementById("prod-purchase-price").value = prod.purchasePrice;
    const sellingInput = document.getElementById("prod-selling-price");
    if (sellingInput) sellingInput.value = prod.sellingPrice > 0 ? prod.sellingPrice : "";
    document.getElementById("prod-min-stock").value = prod.minStock || 5;
    document.getElementById("prod-notes").value = prod.notes || "";

    this.renderVariantRows(prod.variants && prod.variants.length > 0 ? prod.variants : [{ size: "Standard", qty: prod.totalStock || 0 }]);
    this.openModal("modal-add-product");
  }

  renderVariantRows(variants) {
    const tbody = document.getElementById("product-variants-tbody");
    if (!tbody) return;

    tbody.innerHTML = variants.map((v, idx) => `
      <tr class="variant-tr" id="variant-tr-${idx}">
        <td>
          <input type="text" class="form-control form-control-sm variant-size-input font-bold" value="${v.size}" placeholder="সাইজ (যেমন: M, L)" required>
        </td>
        <td>
          <input type="number" class="form-control form-control-sm variant-qty-input text-emerald font-bold" value="${v.qty}" min="0" placeholder="স্টক সংখ্যা" oninput="app.calcModalVariantTotal()" required>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn-ghost" style="color: var(--rose); font-size: 1.2rem;" onclick="this.closest('tr').remove(); app.calcModalVariantTotal();" title="মুছে ফেলুন">🗑️</button>
        </td>
      </tr>
    `).join("");

    this.calcModalVariantTotal();
  }

  addPresetVariant(sizeName) {
    const tbody = document.getElementById("product-variants-tbody");
    if (!tbody) return;

    // Check if size already exists in the table
    const existingInputs = tbody.querySelectorAll(".variant-size-input");
    for (let input of existingInputs) {
      if (input.value.trim().toUpperCase() === sizeName.toUpperCase()) {
        const qtyInput = input.closest("tr").querySelector(".variant-qty-input");
        qtyInput?.focus();
        this.showToast(`${sizeName} সাইজটি তালিকায় রয়েছে!`, "info");
        return;
      }
    }

    const tr = document.createElement("tr");
    tr.className = "variant-tr";
    tr.innerHTML = `
      <td>
        <input type="text" class="form-control form-control-sm variant-size-input font-bold" value="${sizeName}" placeholder="সাইজ" required>
      </td>
      <td>
        <input type="number" class="form-control form-control-sm variant-qty-input text-emerald font-bold" value="0" min="0" placeholder="স্টক সংখ্যা" oninput="app.calcModalVariantTotal()" required>
      </td>
      <td style="text-align: center;">
        <button type="button" class="btn-ghost" style="color: var(--rose); font-size: 1.2rem;" onclick="this.closest('tr').remove(); app.calcModalVariantTotal();" title="মুছে ফেলুন">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
    tr.querySelector(".variant-qty-input")?.focus();
    this.calcModalVariantTotal();
  }

  addCustomVariantRow() {
    const tbody = document.getElementById("product-variants-tbody");
    if (!tbody) return;

    const tr = document.createElement("tr");
    tr.className = "variant-tr";
    tr.innerHTML = `
      <td>
        <input type="text" class="form-control form-control-sm variant-size-input font-bold" placeholder="কাস্টম সাইজ (যেমন: 42, XXL)" required>
      </td>
      <td>
        <input type="number" class="form-control form-control-sm variant-qty-input text-emerald font-bold" value="0" min="0" placeholder="স্টক সংখ্যা" oninput="app.calcModalVariantTotal()" required>
      </td>
      <td style="text-align: center;">
        <button type="button" class="btn-ghost" style="color: var(--rose); font-size: 1.2rem;" onclick="this.closest('tr').remove(); app.calcModalVariantTotal();" title="মুছে ফেলুন">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
    tr.querySelector(".variant-size-input")?.focus();
    this.calcModalVariantTotal();
  }

  calcModalVariantTotal() {
    const inputs = document.querySelectorAll(".variant-qty-input");
    let sum = 0;
    inputs.forEach(i => sum += (parseInt(i.value) || 0));
    const totalEl = document.getElementById("prod-total-calc-qty");
    if (totalEl) totalEl.textContent = sum;
  }

  handleProductSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("product-form-id").value;
    const name = document.getElementById("prod-name").value.trim();
    
    let category = document.getElementById("prod-category")?.value || "";
    const customCatInput = document.getElementById("custom-category-input");
    const customCatWrap = document.getElementById("category-custom-wrap");
    if (customCatWrap && !customCatWrap.classList.contains("hidden") && customCatInput && customCatInput.value.trim()) {
      category = customCatInput.value.trim();
    }
    if (!category || category === "__NEW_CAT__") {
      category = customCatInput?.value.trim() || "Others";
    }

    if (!Array.isArray(this.state.categories)) this.state.categories = [];
    if (category && !this.state.categories.includes(category)) {
      this.state.categories.push(category);
    }

    const brand = document.getElementById("prod-brand").value.trim() || "Faiza Zone";
    const sku = document.getElementById("prod-sku").value.trim() || this.generateId("SKU");
    const purchasePrice = parseFloat(document.getElementById("prod-purchase-price").value) || 0;
    const sellingPrice = parseFloat(document.getElementById("prod-selling-price")?.value) || 0;
    const minStock = parseInt(document.getElementById("prod-min-stock").value) || 5;
    const notes = document.getElementById("prod-notes").value.trim();

    const variantRows = document.querySelectorAll("#product-variants-tbody .variant-tr");
    const variants = [];
    let totalStock = 0;

    variantRows.forEach(row => {
      const size = row.querySelector(".variant-size-input").value.trim();
      const qty = parseInt(row.querySelector(".variant-qty-input").value) || 0;
      if (size) {
        variants.push({ size, qty });
        totalStock += qty;
      }
    });

    if (variants.length === 0) {
      variants.push({ size: "Standard", qty: 0 });
    }

    if (id) {
      const prod = this.state.products.find(p => p.id === id);
      if (prod) {
        prod.name = name;
        prod.category = category;
        prod.brand = brand;
        prod.sku = sku;
        prod.purchasePrice = purchasePrice;
        prod.sellingPrice = sellingPrice;
        prod.minStock = minStock;
        prod.variants = variants;
        prod.totalStock = totalStock;
        prod.notes = notes;
      }
      this.showToast("পণ্য সফলভাবে আপডেট করা হয়েছে!", "success");
    } else {
      const newProd = {
        id: this.generateId("PROD"),
        name,
        category,
        brand,
        sku,
        purchasePrice,
        sellingPrice,
        minStock,
        variants,
        totalStock,
        notes,
        createdAt: new Date().toISOString()
      };
      this.state.products.unshift(newProd);

      // Log initial stock audit for each size
      variants.forEach(v => {
        if (v.qty > 0) {
          this.state.stockMovements.unshift({
            id: this.generateId("MOV"),
            date: new Date().toISOString(),
            productId: newProd.id,
            productName: newProd.name,
            variant: v.size,
            change: v.qty,
            prevStock: 0,
            newStock: v.qty,
            reason: "নতুন পণ্য যোগ (Initial Stock)",
            refId: newProd.id
          });
        }
      });

      const sizeBreakdownStr = variants.map(v => `${v.size}: ${v.qty}`).join(", ");
      this.addActivity("📦", `নতুন পণ্য যোগ: ${newProd.name} (${sizeBreakdownStr})`, `মোট: ${totalStock} pcs`);
      this.showToast("নতুন পণ্য সফলভাবে যোগ করা হয়েছে!", "success");
    }

    this.saveState();
    this.closeModal("modal-add-product");
    this.renderAll();
  }

  confirmDeleteProduct(productId) {
    const prod = this.state.products.find(p => p.id === productId);
    if (!prod) return;

    this.openConfirmModal(`আপনি কি নিশ্চিত যে "${prod.name}" পণ্যটি মুছে ফেলতে চান?`, () => {
      this.state.products = this.state.products.filter(p => p.id !== productId);
      this.saveState();
      this.renderAll();
      this.showToast("পণ্যটি মুছে ফেলা হয়েছে!", "success");
    });
  }

  // =========================================================
  // PURCHASES & STOCK IN
  // =========================================================
  renderPurchases() {
    const tbody = document.getElementById("purchases-table-body");
    const prodSelect = document.getElementById("pur-product-select");
    if (!tbody) return;

    if (prodSelect) {
      prodSelect.innerHTML = `
        <option value="">-- পণ্য নির্বাচন করুন --</option>
        ${this.state.products.map(p => `<option value="${p.id}">${p.name} (${p.category})</option>`).join("")}
      `;
    }

    const search = (document.getElementById("purchases-search-input")?.value || "").toLowerCase().trim();
    const filtered = this.state.purchases.filter(p => {
      return !search || p.productName.toLowerCase().includes(search) || (p.supplier && p.supplier.toLowerCase().includes(search));
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="text-center p-6 text-muted">কোনো ক্রয় চালান পাওয়া যায়নি।</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => {
      const prod = this.state.products.find(x => x.id === p.productId);
      const cat = prod ? prod.category : "Shirt";
      const catVis = this.getCategoryVisual(cat);
      return `
        <tr>
          <td><strong class="font-mono text-indigo">${p.id}</strong></td>
          <td>${this.formatDate(p.date)}</td>
          <td>
            <div class="inv-prod-cell">
              <div class="inv-prod-thumb ${catVis.class}" style="width: 32px; height: 32px; font-size: 1.15rem;">${catVis.emoji}</div>
              <div>
                <strong class="text-main">${p.productName}</strong> <span class="badge badge-indigo">${p.variant}</span>
              </div>
            </div>
          </td>
          <td class="font-bold">${p.qty} pcs</td>
          <td>${this.formatCurrency(p.unitCost)}</td>
          <td class="font-bold text-emerald">${this.formatCurrency(p.totalCost)}</td>
          <td class="font-bold text-emerald">${this.formatCurrency(p.paidAmount)}</td>
          <td class="font-bold ${p.dueAmount > 0 ? 'text-amber' : ''}">${this.formatCurrency(p.dueAmount)}</td>
          <td>${p.supplier || "--"}</td>
          <td>
            <div class="table-action-group">
              <button class="btn-action btn-action-danger" onclick="app.handlePurchaseReturn('${p.id}')">↩️ ফেরত</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  openStockInForProduct(productId, targetVariant = null) {
    this.openModal("modal-add-purchase");
    const prodSelect = document.getElementById("pur-product-select");
    if (prodSelect) {
      prodSelect.value = productId;
      this.handlePurchaseProductChange(targetVariant);
    }
  }

  handlePurchaseProductChange(targetVariant = null) {
    const prodId = document.getElementById("pur-product-select").value;
    const varSelect = document.getElementById("pur-variant-select");
    const unitCostInput = document.getElementById("pur-unit-cost");
    if (!prodId || !varSelect) return;

    const prod = this.state.products.find(p => p.id === prodId);
    if (!prod) return;

    if (unitCostInput) unitCostInput.value = prod.purchasePrice || "";

    varSelect.innerHTML = prod.variants && prod.variants.length > 0 
      ? prod.variants.map(v => `<option value="${v.size}">${v.size} (বর্তমান স্টক: ${v.qty} pcs)</option>`).join("")
      : `<option value="Standard">Standard</option>`;

    if (targetVariant) varSelect.value = targetVariant;
    this.calcPurchaseTotal();
  }

  calcPurchaseTotal() {
    const qty = parseInt(document.getElementById("pur-qty").value) || 0;
    const unitCost = parseFloat(document.getElementById("pur-unit-cost").value) || 0;
    const total = qty * unitCost;
    document.getElementById("pur-total-cost").value = total;

    const payType = document.getElementById("pur-payment-type").value;
    const paidInput = document.getElementById("pur-paid-amount");
    const dueInput = document.getElementById("pur-due-amount");

    if (payType === "cash") {
      if (paidInput) paidInput.value = total;
      if (dueInput) dueInput.value = 0;
    } else if (payType === "due") {
      if (paidInput) paidInput.value = 0;
      if (dueInput) dueInput.value = total;
    } else {
      const paid = parseFloat(paidInput?.value) || 0;
      if (dueInput) dueInput.value = Math.max(0, total - paid);
    }
  }

  handlePurchasePaymentTypeChange() {
    const payType = document.getElementById("pur-payment-type").value;
    const partialBox = document.getElementById("pur-partial-box");
    if (partialBox) partialBox.classList.toggle("hidden", payType !== "partial");
    this.calcPurchaseTotal();
  }

  handlePurchaseSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById("pur-product-select").value;
    const variantSize = document.getElementById("pur-variant-select").value;
    const qty = parseInt(document.getElementById("pur-qty").value) || 0;
    const unitCost = parseFloat(document.getElementById("pur-unit-cost").value) || 0;
    const supplier = document.getElementById("pur-supplier").value.trim();
    const payType = document.getElementById("pur-payment-type").value;
    const note = document.getElementById("pur-note").value.trim();

    const prod = this.state.products.find(p => p.id === prodId);
    if (!prod || qty <= 0) {
      this.showToast("সঠিক পণ্য ও পরিমাণ নির্বাচন করুন!", "warning");
      return;
    }

    const totalCost = qty * unitCost;
    let paidAmount = totalCost;
    let dueAmount = 0;

    if (payType === "due") {
      paidAmount = 0;
      dueAmount = totalCost;
    } else if (payType === "partial") {
      paidAmount = Math.min(totalCost, parseFloat(document.getElementById("pur-paid-amount").value) || 0);
      dueAmount = Math.max(0, totalCost - paidAmount);
    }

    const purchaseId = this.generateId("PUR");
    const now = new Date().toISOString();

    // 1. Update product size variant stock
    let prevStock = 0;
    let newStock = 0;
    if (prod.variants) {
      const v = prod.variants.find(x => x.size === variantSize);
      if (v) {
        prevStock = v.qty;
        v.qty = Number(v.qty) + qty;
        newStock = v.qty;
      }
      prod.totalStock = prod.variants.reduce((a, b) => a + Number(b.qty), 0);
    } else {
      prevStock = prod.totalStock || 0;
      prod.totalStock = prevStock + qty;
      newStock = prod.totalStock;
    }

    // 2. Audit log
    this.state.stockMovements.unshift({
      id: this.generateId("MOV"),
      date: now,
      productId: prod.id,
      productName: prod.name,
      variant: variantSize,
      change: qty,
      prevStock: prevStock,
      newStock: newStock,
      reason: `মাল কেনা / স্টক ইন (Purchase ${purchaseId}) - ${supplier}`,
      refId: purchaseId
    });

    // 3. Purchase record
    this.state.purchases.unshift({
      id: purchaseId,
      date: now,
      productId: prod.id,
      productName: prod.name,
      variant: variantSize,
      qty,
      unitCost,
      totalCost,
      paidAmount,
      dueAmount,
      supplier,
      note
    });

    // 4. Cash deduction
    if (paidAmount > 0) {
      const prevBal = this.calculateMetrics().currentCashBalance;
      this.state.cashTransactions.unshift({
        id: this.generateId("CASH"),
        date: now,
        type: "Purchase / মাল কেনা",
        refId: purchaseId,
        description: `মাল ক্রয় পরিশোধ (${prod.name} ${variantSize} x${qty}) - ${supplier}`,
        in: 0,
        out: paidAmount,
        balance: prevBal - paidAmount
      });
    }

    this.addActivity("📥", `মাল কেনা ও স্টক ইন: ${prod.name} (${variantSize}) x${qty} pcs`, this.formatCurrency(totalCost));
    this.saveState();
    this.closeModal("modal-add-purchase");
    this.renderAll();
    this.playSound("success");
    this.showToast(`মাল কেনা সম্পন্ন হয়েছে! ${qty} পিস স্টকে যুক্ত হয়েছে।`, "success");
  }

  handlePurchaseReturn(purchaseId) {
    const purchase = this.state.purchases.find(p => p.id === purchaseId);
    if (!purchase) return;

    this.openConfirmModal(`আপনি কি নিশ্চিত যে ${purchase.productName} (${purchase.variant}) এর ${purchase.qty} পিস সাপ্লায়ারকে ফেরত দিতে চান?`, () => {
      const prod = this.state.products.find(p => p.id === purchase.productId);
      if (prod) {
        if (prod.variants) {
          const v = prod.variants.find(x => x.size === purchase.variant);
          if (v) v.qty = Math.max(0, v.qty - purchase.qty);
          prod.totalStock = prod.variants.reduce((a, b) => a + Number(b.qty), 0);
        } else {
          prod.totalStock = Math.max(0, (prod.totalStock || 0) - purchase.qty);
        }

        this.state.stockMovements.unshift({
          id: this.generateId("MOV"),
          date: new Date().toISOString(),
          productId: prod.id,
          productName: prod.name,
          variant: purchase.variant,
          change: -purchase.qty,
          prevStock: prod.totalStock + purchase.qty,
          newStock: prod.totalStock,
          reason: `সাপ্লায়ারকে মাল ফেরত (Purchase Return ${purchaseId})`,
          refId: purchaseId
        });
      }

      if (purchase.paidAmount > 0) {
        const prevBal = this.calculateMetrics().currentCashBalance;
        this.state.cashTransactions.unshift({
          id: this.generateId("CASH"),
          date: new Date().toISOString(),
          type: "Purchase Return Refund",
          refId: purchaseId,
          description: `সাপ্লায়ার থেকে ফেরত টাকা জমা (${purchase.productName})`,
          in: purchase.paidAmount,
          out: 0,
          balance: prevBal + purchase.paidAmount
        });
      }

      this.state.purchases = this.state.purchases.filter(p => p.id !== purchaseId);
      this.addActivity("↩️", `সাপ্লায়ারকে মাল ফেরত: ${purchase.productName} (${purchase.qty} pcs)`, this.formatCurrency(purchase.totalCost));
      this.saveState();
      this.renderAll();
      this.showToast("ক্রয় ফেরত সফলভাবে সম্পন্ন হয়েছে!", "success");
    });
  }

  // =========================================================
  // CUSTOMERS & BAKI KHATA
  // =========================================================
  renderCustomers() {
    const tbody = document.getElementById("customers-table-body");
    if (!tbody) return;

    const search = (document.getElementById("cust-search-input")?.value || "").toLowerCase().trim();
    const filterStatus = document.getElementById("cust-filter-status")?.value || "ALL";

    let totalDue = 0;
    let dueCount = 0;
    let totalCollected = 0;

    this.state.customers.forEach(c => {
      if (c.due > 0) {
        totalDue += c.due;
        dueCount++;
      }
      totalCollected += (c.totalPaid || 0);
    });

    document.getElementById("cust-total-due-stat").textContent = this.formatCurrency(totalDue);
    document.getElementById("cust-due-count-stat").textContent = `${dueCount} জন কাস্টমারের বকেয়া`;
    document.getElementById("cust-total-count-stat").textContent = this.state.customers.length;
    document.getElementById("cust-total-collected-stat").textContent = this.formatCurrency(totalCollected);

    const countAllEl = document.getElementById("cust-count-all");
    const countDueEl = document.getElementById("cust-count-due");
    const countPaidEl = document.getElementById("cust-count-paid");
    if (countAllEl) countAllEl.textContent = this.state.customers.length;
    if (countDueEl) countDueEl.textContent = dueCount;
    if (countPaidEl) countPaidEl.textContent = this.state.customers.length - dueCount;

    const filtered = this.state.customers.filter(c => {
      const matchesSearch = !search || c.name.toLowerCase().includes(search) || c.phone.includes(search);
      let matchesFilter = true;
      if (filterStatus === "DUE_ONLY") matchesFilter = c.due > 0;
      else if (filterStatus === "PAID_ONLY") matchesFilter = c.due === 0;
      return matchesSearch && matchesFilter;
    });

    // Mobile Customer List Cards (Mockup 5)
    const mobileCustList = document.getElementById("cust-mobile-cards-list");
    if (mobileCustList) {
      if (filtered.length === 0) {
        mobileCustList.innerHTML = `<div class="card p-4 text-center text-muted">কোনো কাস্টমার পাওয়া যায়নি।</div>`;
      } else {
        const avatarColors = ["#3b82f6", "#8b5cf6", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899"];
        mobileCustList.innerHTML = filtered.map((c, i) => {
          const initial = (c.name || "C").trim().charAt(0).toUpperCase();
          const color = avatarColors[i % avatarColors.length];
          const lastSaleDate = c.ledger && c.ledger.length > 0 ? this.formatDate(c.ledger[0].date) : "নতুন";
          return `
            <div class="cust-card-mobile" onclick="app.openCustomerDetails('${c.id}')">
              <div class="cust-avatar-pill" style="background: ${color};">${initial}</div>
              <div class="cust-info flex-1">
                <div class="cust-name font-bold text-base">${c.name}</div>
                <div class="cust-phone text-xs text-muted font-bold">${c.phone}</div>
                <div class="cust-last-sale text-xs text-muted">শেষ লেনদেন: ${lastSaleDate}</div>
              </div>
              <div class="cust-due-badge ${c.due <= 0 ? 'is-zero' : ''}">
                ${c.due > 0 ? `বাকি: ${this.formatCurrency(c.due)}` : `পরিশোধিত ✓`}
              </div>
            </div>
          `;
        }).join("");
      }
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center p-6 text-muted">কোনো কাস্টমার পাওয়া যায়নি।</td></tr>`;
      return;
    }

    const avatarColors = ["#3b82f6", "#8b5cf6", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899"];
    tbody.innerHTML = filtered.map((c, i) => {
      const initial = (c.name || "C").trim().charAt(0).toUpperCase();
      const color = avatarColors[i % avatarColors.length];
      return `
        <tr>
          <td>
            <div class="cust-avatar-cell">
              <div class="cust-avatar-pill" style="background: ${color};">${initial}</div>
              <div>
                <strong class="text-main">${c.name}</strong>
                <div class="text-xs text-muted font-mono">${c.id}</div>
              </div>
            </div>
          </td>
          <td><strong>${c.phone}</strong></td>
          <td>${c.address || "--"}</td>
          <td class="font-bold">${this.formatCurrency(c.totalPurchased || 0)}</td>
          <td class="font-bold text-emerald">${this.formatCurrency(c.totalPaid || 0)}</td>
          <td><strong class="text-lg ${c.due > 0 ? 'text-amber' : 'text-emerald'}">${this.formatCurrency(c.due || 0)}</strong></td>
        <td>
          <div class="table-action-group">
            ${c.due > 0 ? `
              <button class="btn-action btn-action-primary" onclick="app.openDueCollection('${c.id}')">💰 বাকি আদায়</button>
              <button class="btn-action" onclick="app.openReminderModal('${c.id}')" title="তাগাদা মেসেজ">📱 তাগাদা</button>
            ` : ''}
            <button class="btn-action btn-action-info" onclick="app.openCustomerDetails('${c.id}')" title="বিস্তারিত">👤 বিস্তারিত</button>
            <button class="btn-action btn-action-icon-only" onclick="app.openEditCustomerModal('${c.id}')" title="এডিট">✏️</button>
          </div>
        </td>
      </tr>
    `;
    }).join("");
  }

  handleCustomerSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("cust-form-id").value;
    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const initialDue = parseFloat(document.getElementById("cust-initial-due").value) || 0;

    if (id) {
      const cust = this.state.customers.find(c => c.id === id);
      if (cust) {
        cust.name = name;
        cust.phone = phone;
        cust.address = address;
      }
      this.showToast("কাস্টমার তথ্য আপডেট করা হয়েছে!", "success");
    } else {
      const newCust = {
        id: this.generateId("CUST"),
        name,
        phone,
        address,
        totalPurchased: initialDue,
        totalPaid: 0,
        due: initialDue,
        ledger: initialDue > 0 ? [{
          id: this.generateId("LEDG"),
          date: new Date().toISOString(),
          type: "Opening Due / পূর্বের বকেয়া",
          refId: "INIT-DUE",
          purchaseAmount: initialDue,
          paidAmount: 0,
          dueBalance: initialDue
        }] : []
      };

      this.state.customers.unshift(newCust);
      this.addActivity("👤", `নতুন কাস্টমার নিবন্ধিত: ${name}`, initialDue > 0 ? `বকেয়া: ${this.formatCurrency(initialDue)}` : "");
      this.showToast("নতুন কাস্টমার সফলভাবে সংরক্ষণ করা হয়েছে!", "success");

      // Auto-select in POS customer dropdown if available
      const posCustSelect = document.getElementById("pos-customer-select");
      if (posCustSelect) {
        this.renderPosCustomerDropdown();
        posCustSelect.value = newCust.id;
        this.handlePosCustomerChange();
      }
    }

    this.saveState();
    this.closeModal("modal-add-customer");
    this.renderAll();
  }

  openEditCustomerModal(custId) {
    const cust = this.state.customers.find(c => c.id === custId);
    if (!cust) return;

    document.getElementById("cust-modal-title").textContent = "কাস্টমার তথ্য এডিট";
    document.getElementById("cust-form-id").value = cust.id;
    document.getElementById("cust-name").value = cust.name;
    document.getElementById("cust-phone").value = cust.phone;
    document.getElementById("cust-address").value = cust.address || "";
    document.getElementById("cust-initial-due").parentElement.classList.add("hidden");
    this.openModal("modal-add-customer");
  }

  // --- DUE COLLECTION (বাকি আদায়) ---
  openDueCollection(targetCustId) {
    const select = document.getElementById("due-col-cust-select");
    if (!select) return;

    const dueCustomers = this.state.customers.filter(c => c.due > 0);
    if (dueCustomers.length === 0) {
      this.showToast("বর্তমানে কোনো কাস্টমারের বকেয়া বাকি নেই!", "success");
      return;
    }

    select.innerHTML = dueCustomers.map(c => `
      <option value="${c.id}">${c.name} (${c.phone}) — বকেয়া: ৳${c.due}</option>
    `).join("");

    if (targetCustId) select.value = targetCustId;
    this.handleDueCustSelectChange();
    this.openModal("modal-due-collection");
  }

  handleDueCustSelectChange() {
    const custId = document.getElementById("due-col-cust-select").value;
    const cust = this.state.customers.find(c => c.id === custId);
    if (cust) {
      document.getElementById("due-col-current-due").textContent = this.formatCurrency(cust.due);
      document.getElementById("due-col-amount").value = cust.due;
      document.getElementById("due-col-amount").max = cust.due;
      this.calcRemainingDue();
    }
  }

  calcRemainingDue() {
    const custId = document.getElementById("due-col-cust-select").value;
    const cust = this.state.customers.find(c => c.id === custId);
    if (!cust) return;

    const payAmount = parseFloat(document.getElementById("due-col-amount").value) || 0;
    const remaining = Math.max(0, cust.due - payAmount);
    document.getElementById("due-col-remaining-due").textContent = this.formatCurrency(remaining);
  }

  handleDueCollectionSubmit(e) {
    e.preventDefault();
    const custId = document.getElementById("due-col-cust-select").value;
    const amount = parseFloat(document.getElementById("due-col-amount").value) || 0;
    const method = document.getElementById("due-col-method").value;
    const note = document.getElementById("due-col-note").value.trim();

    const cust = this.state.customers.find(c => c.id === custId);
    if (!cust || amount <= 0) {
      this.showToast("সঠিক টাকার পরিমাণ লিখুন!", "warning");
      return;
    }

    if (amount > cust.due) {
      this.showToast(`আদায়ের পরিমাণ বর্তমান বকেয়ার (৳${cust.due}) চেয়ে বেশি হতে পারে না!`, "error");
      return;
    }

    const payId = this.generateId("PAY");
    const now = new Date().toISOString();

    cust.due = Math.max(0, cust.due - amount);
    cust.totalPaid = (cust.totalPaid || 0) + amount;

    if (!cust.ledger) cust.ledger = [];
    cust.ledger.unshift({
      id: this.generateId("LEDG"),
      date: now,
      type: `Due Payment / বাকি আদায় (${method.toUpperCase()})`,
      refId: payId,
      purchaseAmount: 0,
      paidAmount: amount,
      dueBalance: cust.due
    });

    const accountKey = method || "cash";
    const prevBal = this.getAccountBalance(accountKey);
    const accountLabel = accountKey === "bkash" ? "বিকাশ (bKash)" : (accountKey === "nagad" ? "নগদ (Nagad)" : (accountKey === "bank" ? "ব্যাংক (Bank)" : "ক্যাশ (Cash)"));

    this.state.cashTransactions.unshift({
      id: this.generateId("TX"),
      date: now,
      account: accountKey,
      type: `Due Collection / বাকি আদায় (${accountLabel})`,
      refId: payId,
      description: `কাস্টমার বকেয়া আদায় (${accountLabel}) - ${cust.name}${note ? ` [${note}]` : ''}`,
      in: amount,
      out: 0,
      balance: prevBal + amount
    });

    this.addActivity("💰", `বাকি আদায়: ${cust.name} [${accountLabel}]`, this.formatCurrency(amount));
    this.saveState();
    this.closeModal("modal-due-collection");
    this.renderAll();
    this.playSound("success");
    this.showToast(`৳${amount} বাকি আদায় সফলভাবে ${accountLabel} অ্যাকাউন্টে জমা হয়েছে!`, "success");
  }

  // --- CUSTOMER LEDGER & REMINDER ---
  openCustomerLedger(custId) {
    const cust = this.state.customers.find(c => c.id === custId);
    if (!cust) return;

    document.getElementById("cust-ledger-title").textContent = `${cust.name} — খাতা বিবরণী`;
    document.getElementById("cust-ledger-summary").innerHTML = `
      <div class="flex-wrap justify-between items-center">
        <div>
          <h4>${cust.name}</h4>
          <span class="text-sm text-muted">ফোন: ${cust.phone} | ঠিকানা: ${cust.address || "--"}</span>
        </div>
        <div class="text-right">
          <span class="text-xs text-muted">বর্তমান বকেয়া:</span>
          <div class="text-xl font-bold ${cust.due > 0 ? 'text-amber' : 'text-emerald'}">${this.formatCurrency(cust.due)}</div>
        </div>
      </div>
    `;

    const tbody = document.getElementById("cust-ledger-tbody");
    if (tbody) {
      if (!cust.ledger || cust.ledger.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center p-4 text-muted">কোনো লেনদেন রেকর্ড নেই।</td></tr>`;
      } else {
        tbody.innerHTML = cust.ledger.map(row => `
          <tr>
            <td>${this.formatDate(row.date)}</td>
            <td><strong>${row.type}</strong></td>
            <td>${row.refId || "--"}</td>
            <td class="font-bold text-rose">${row.purchaseAmount > 0 ? `+ ${this.formatCurrency(row.purchaseAmount)}` : '--'}</td>
            <td class="font-bold text-emerald">${row.paidAmount > 0 ? `- ${this.formatCurrency(row.paidAmount)}` : '--'}</td>
            <td><strong>${this.formatCurrency(row.dueBalance)}</strong></td>
          </tr>
        `).join("");
      }
    }

    this.openModal("modal-customer-ledger");
  }

  openReminderModal(custId) {
    const cust = this.state.customers.find(c => c.id === custId);
    if (!cust || cust.due <= 0) return;

    const s = this.state.settings;
    const msg = `আসসালামু আলাইকুম ${cust.name},\n${s.shopName || "Faiza Zone"}-এ আপনার মোট বকেয়া ${this.formatCurrency(cust.due)}।\nসুবিধাজনক সময়ে বকেয়া পরিশোধ করার জন্য বিনীত অনুরোধ জানাচ্ছি।\nধন্যবাদ,\n${s.shopName || "Faiza Zone"}\nযোগাযোগ: ${s.phone || ""}`;

    document.getElementById("reminder-text").value = msg;
    this.currentReminderCust = cust;
    this.openModal("modal-reminder");
  }

  copyReminderText() {
    const text = document.getElementById("reminder-text").value;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast("তাগাদা মেসেজ কপি হয়েছে!", "success");
    });
  }

  openWhatsAppReminder() {
    if (!this.currentReminderCust) return;
    const text = encodeURIComponent(document.getElementById("reminder-text").value);
    const phone = this.currentReminderCust.phone.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/88${phone}?text=${text}`;
    window.open(waUrl, "_blank");
  }

  // =========================================================
  // EXPENSES
  // =========================================================
  renderExpenses() {
    const tbody = document.getElementById("expenses-table-body");
    if (!tbody) return;

    const search = (document.getElementById("exp-search-input")?.value || "").toLowerCase().trim();
    const catFilter = document.getElementById("exp-category-filter")?.value || "ALL";
    const dateFilter = document.getElementById("exp-date-filter")?.value || "";

    const m = this.calculateMetrics();
    document.getElementById("exp-today-stat").textContent = this.formatCurrency(m.todayExpense);
    document.getElementById("exp-today-entries").textContent = `${m.todayExpenseCount} টি খরচ এন্ট্রি`;
    document.getElementById("exp-month-stat").textContent = this.formatCurrency(m.monthExpense);
    document.getElementById("exp-total-stat").textContent = this.formatCurrency(m.totalExpense);

    const filtered = this.state.expenses.filter(e => {
      const matchesSearch = !search || e.category.toLowerCase().includes(search) || (e.note && e.note.toLowerCase().includes(search));
      const matchesCat = catFilter === "ALL" || e.category === catFilter;
      const matchesDate = !dateFilter || e.date.startsWith(dateFilter);
      return matchesSearch && matchesCat && matchesDate;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center p-6 text-muted">কোনো খরচ রেকর্ড পাওয়া যায়নি।</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(e => `
      <tr>
        <td><strong>${e.id}</strong></td>
        <td>${this.formatDate(e.date)}</td>
        <td><span class="badge badge-indigo">${e.category}</span></td>
        <td><strong class="text-rose text-lg">${this.formatCurrency(e.amount)}</strong></td>
        <td>${e.method || "Cash"}</td>
        <td>${e.note || "--"}</td>
        <td>
          <div class="table-action-group">
            <button class="btn-action btn-action-danger btn-action-icon-only" onclick="app.confirmDeleteExpense('${e.id}')" title="মুছুন">🗑️</button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  handleExpenseSubmit(e) {
    e.preventDefault();
    const category = document.getElementById("exp-category").value;
    const amount = parseFloat(document.getElementById("exp-amount").value) || 0;
    const method = document.getElementById("exp-method").value;
    const note = document.getElementById("exp-note").value.trim();

    if (amount <= 0) {
      this.showToast("সঠিক টাকার পরিমাণ দিন!", "warning");
      return;
    }

    const expId = this.generateId("EXP");
    const now = new Date().toISOString();

    this.state.expenses.unshift({
      id: expId,
      date: now,
      category,
      amount,
      method,
      note
    });

    const accountKey = method || "cash";
    const prevBal = this.getAccountBalance(accountKey);
    const accountLabel = accountKey === "bkash" ? "বিকাশ (bKash)" : (accountKey === "nagad" ? "নগদ (Nagad)" : (accountKey === "bank" ? "ব্যাংক (Bank)" : "ক্যাশ (Cash)"));

    this.state.cashTransactions.unshift({
      id: this.generateId("TX"),
      date: now,
      account: accountKey,
      type: `Expense / খরচ (${category}) [${accountLabel}]`,
      refId: expId,
      description: note || `দোকানের খরচ (${accountLabel}) - ${category}`,
      in: 0,
      out: amount,
      balance: prevBal - amount
    });

    this.addActivity("💸", `দোকান খরচ: ${category} [${accountLabel}]`, this.formatCurrency(amount));
    this.saveState();
    this.closeModal("modal-add-expense");
    this.renderAll();
    this.playSound("beep");
    this.showToast(`খরচ সফলভাবে ${accountLabel} অ্যাকাউন্ট হতে রেকর্ড হয়েছে!`, "success");
  }

  confirmDeleteExpense(expId) {
    const exp = this.state.expenses.find(e => e.id === expId);
    if (!exp) return;

    this.openConfirmModal(`আপনি কি "${exp.category}" এর ৳${exp.amount} টাকার খরচ রেকর্ডটি মুছে ফেলতে চান?`, () => {
      this.state.expenses = this.state.expenses.filter(e => e.id !== expId);
      this.state.cashTransactions = this.state.cashTransactions.filter(t => t.refId !== expId);
      this.saveState();
      this.renderAll();
      this.showToast("খরচ রেকর্ড ও ক্যাশ খাতা থেকে মুছে ফেলা হয়েছে", "success");
    });
  }

  // =========================================================
  // CASH & MFS FLOW REGISTER
  // =========================================================
  renderCashflow() {
    const tbody = document.getElementById("cashflow-table-body");
    if (!tbody) return;

    const m = this.calculateMetrics();
    const cashEl = document.getElementById("cf-cash-balance");
    const bkashEl = document.getElementById("cf-bkash-balance");
    const nagadEl = document.getElementById("cf-nagad-balance");
    const bankEl = document.getElementById("cf-bank-balance");
    const totalEl = document.getElementById("cf-total-balance");

    if (cashEl) cashEl.textContent = this.formatCurrency(m.cashBalance);
    if (bkashEl) bkashEl.textContent = this.formatCurrency(m.bkashBalance);
    if (nagadEl) nagadEl.textContent = this.formatCurrency(m.nagadBalance);
    if (bankEl) bankEl.textContent = this.formatCurrency(m.bankBalance);
    if (totalEl) totalEl.textContent = this.formatCurrency(m.totalLiquidBalance);

    const filterAcc = this.currentCashflowAccount || "all";
    const filtered = this.state.cashTransactions.filter(t => {
      if (filterAcc === "all") return true;
      const acc = (t.account || (t.type && t.type.toLowerCase().includes("bkash") ? "bkash" : (t.type && t.type.toLowerCase().includes("nagad") ? "nagad" : (t.type && (t.type.toLowerCase().includes("bank") || t.type.toLowerCase().includes("card")) ? "bank" : "cash")))).toLowerCase();
      return acc === filterAcc;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center p-6 text-muted">কোনো লেনদেন রেকর্ড নেই।</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(t => {
      const acc = (t.account || (t.type && t.type.toLowerCase().includes("bkash") ? "bkash" : (t.type && t.type.toLowerCase().includes("nagad") ? "nagad" : (t.type && (t.type.toLowerCase().includes("bank") || t.type.toLowerCase().includes("card")) ? "bank" : "cash")))).toLowerCase();
      const badgeClass = acc === "bkash" ? "badge-bkash" : (acc === "nagad" ? "badge-nagad" : (acc === "bank" ? "badge-bank" : "badge-cash"));
      const badgeLabel = acc === "bkash" ? "📱 বিকাশ" : (acc === "nagad" ? "🟠 নগদ" : (acc === "bank" ? "💳 ব্যাংক" : "💵 ক্যাশ"));
      const txIdentifier = t.id || t.refId;

      return `
        <tr>
          <td>${this.formatDate(t.date)}</td>
          <td><span class="badge ${badgeClass} font-bold">${badgeLabel}</span></td>
          <td><strong>${t.type}</strong></td>
          <td>${t.refId || "--"} ${t.trxId ? `<div class="text-xs text-muted">Trx: ${t.trxId}</div>` : ''}</td>
          <td>${t.description || "--"}</td>
          <td class="text-emerald font-bold">${t.in > 0 ? `+ ${this.formatCurrency(t.in)}` : '--'}</td>
          <td class="text-rose font-bold">${t.out > 0 ? `- ${this.formatCurrency(t.out)}` : '--'}</td>
          <td><strong>${this.formatCurrency(t.balance)}</strong></td>
          <td>
            <div class="table-action-group">
              <button class="btn-action btn-action-danger btn-action-icon-only" onclick="app.confirmDeleteCashTransaction('${txIdentifier}')" title="লেনদেন মুছুন">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  confirmDeleteCashTransaction(txIdentifier) {
    if (!txIdentifier) return;
    const tx = this.state.cashTransactions.find(t => (t.id && t.id === txIdentifier) || (t.refId && t.refId === txIdentifier));
    if (!tx) {
      this.state.cashTransactions = this.state.cashTransactions.filter(t => t.id !== txIdentifier && t.refId !== txIdentifier);
      this.saveState();
      this.renderAll();
      this.showToast("লেনদেনটি মুছে ফেলা হয়েছে!", "success");
      return;
    }

    // 1. If linked to an Expense (EXP-...)
    if (tx.refId && tx.refId.startsWith("EXP-")) {
      const expId = tx.refId;
      this.openConfirmModal(`⚠️ আপনি কি এই খরচ লেনদেনটি (${tx.description || tx.type}) মুছে ফেলতে চান? এটি খরচ খাতা থেকেও মুছে যাবে এবং ক্যাশ ব্যালেন্স সমন্বয় হবে।`, () => {
        this.state.expenses = this.state.expenses.filter(e => e.id !== expId);
        this.state.cashTransactions = this.state.cashTransactions.filter(t => t.id !== tx.id && t.refId !== expId);
        this.saveState();
        this.renderAll();
        this.playSound("beep");
        this.showToast("খরচ রেকর্ড ও ক্যাশ খাতা থেকে মুছে ফেলা হয়েছে!", "success");
      });
      return;
    }

    // 2. If linked to a Sale (SALE-...)
    if (tx.refId && tx.refId.startsWith("SALE-")) {
      const saleId = tx.refId;
      this.openConfirmModal(`⚠️ এই লেনদেনটি "${saleId}" বিক্রির সাথে সম্পর্কিত। আপনি কি বিক্রিটি বাতিল করে সাইজ অনুযায়ী স্টক ফেরত দিয়ে লেনদেন মুছে ফেলতে চান?`, () => {
        this.deleteSale(saleId, true);
      });
      return;
    }

    // 3. If linked to a Purchase (PUR-...)
    if (tx.refId && tx.refId.startsWith("PUR-")) {
      const purchaseId = tx.refId;
      this.openConfirmModal(`⚠️ এই লেনদেনটি মাল কেনা (${purchaseId}) চালানের সাথে সম্পর্কিত। আপনি কি ক্রয় রেকর্ড ও ক্যাশ এন্ট্রি মুছে ফেলতে চান?`, () => {
        this.state.purchases = this.state.purchases.filter(p => p.id !== purchaseId);
        this.state.cashTransactions = this.state.cashTransactions.filter(t => t.id !== tx.id && t.refId !== purchaseId);
        this.saveState();
        this.renderAll();
        this.playSound("beep");
        this.showToast("ক্রয় লেনদেন রেকর্ড মুছে ফেলা হয়েছে!", "success");
      });
      return;
    }

    // 4. If linked to Fund Transfer (TRF-...)
    if (tx.refId && tx.refId.startsWith("TRF-")) {
      const trfId = tx.refId;
      this.openConfirmModal(`⚠️ আপনি কি এই ফান্ড ট্রান্সফার লেনদেনটি (${trfId}) মুছে ফেলতে চান? উভয় অ্যাকাউন্টের ট্রান্সফার এন্ট্রি মুছে যাবে।`, () => {
        this.state.cashTransactions = this.state.cashTransactions.filter(t => t.refId !== trfId && t.id !== tx.id);
        this.saveState();
        this.renderAll();
        this.playSound("beep");
        this.showToast("ফান্ড ট্রান্সফার রেকর্ড মুছে ফেলা হয়েছে!", "success");
      });
      return;
    }

    // 5. Opening Cash / Deposits / Withdrawals / Other Manual Entries
    const label = tx.description || tx.type || "লেনদেন";
    this.openConfirmModal(`⚠️ আপনি কি নিশ্চিত যে "${label}" (${this.formatCurrency(tx.in || tx.out)}) এন্ট্রিটি ক্যাশ খাতা থেকে মুছে ফেলতে চান?`, () => {
      if (tx.refId === "INIT-CASH" || tx.refId === "OPENING") {
        if (tx.account === "cash" || !tx.account) {
          this.state.openingCash = 0;
        }
      }
      this.state.cashTransactions = this.state.cashTransactions.filter(t => t !== tx && t.id !== tx.id && (!tx.refId || t.refId !== tx.refId || tx.refId === "DEPOSIT" || tx.refId === "WITHDRAW"));
      this.saveState();
      this.renderAll();
      this.playSound("beep");
      this.showToast("লেনদেনটি সফলভাবে মুছে ফেলা হয়েছে!", "success");
    });
  }

  handleCashEntrySubmit(e) {
    e.preventDefault();
    const account = document.getElementById("cash-entry-account")?.value || "cash";
    const type = document.getElementById("cash-entry-type")?.value || "cash_in";
    const amount = parseFloat(document.getElementById("cash-entry-amount")?.value) || 0;
    const note = document.getElementById("cash-entry-note")?.value.trim() || "";

    const now = new Date().toISOString();
    const prevBal = this.getAccountBalance(account);
    const accLabel = account === "bkash" ? "বিকাশ (bKash)" : (account === "nagad" ? "নগদ (Nagad)" : (account === "bank" ? "ব্যাংক (Bank)" : "ক্যাশ (Cash)"));

    if (type === "opening") {
      if (account === "cash") this.state.openingCash = amount;
      this.state.cashTransactions.unshift({
        id: this.generateId("TX"),
        date: now,
        account: account,
        type: `${accLabel} Opening Balance`,
        refId: "OPENING",
        description: note || `${accLabel} প্রারম্ভিক ব্যালেন্স সেট`,
        in: amount,
        out: 0,
        balance: prevBal + amount
      });
      this.showToast(`${accLabel} ওপেনিং ব্যালেন্স ৳${amount} সেট করা হয়েছে!`, "success");
    } else if (type === "cash_in") {
      this.state.cashTransactions.unshift({
        id: this.generateId("TX"),
        date: now,
        account: account,
        type: `${accLabel} Deposit / জমা`,
        refId: "DEPOSIT",
        description: note || `${accLabel} অন্যান্য জমা`,
        in: amount,
        out: 0,
        balance: prevBal + amount
      });
      this.showToast(`৳${amount} ${accLabel} অ্যাকাউন্টে জমা হয়েছে!`, "success");
    } else {
      this.state.cashTransactions.unshift({
        id: this.generateId("TX"),
        date: now,
        account: account,
        type: `${accLabel} Withdrawal / উত্তোলন`,
        refId: "WITHDRAW",
        description: note || `${accLabel} উত্তোলন / খরচ`,
        in: 0,
        out: amount,
        balance: prevBal - amount
      });
      this.showToast(`৳${amount} ${accLabel} থেকে উত্তোলন করা হয়েছে!`, "success");
    }

    this.saveState();
    this.closeModal("modal-cash-entry");
    this.renderAll();
  }

  handleFundTransferSubmit(e) {
    e.preventDefault();
    const fromAcc = document.getElementById("transfer-from-account")?.value || "bkash";
    const toAcc = document.getElementById("transfer-to-account")?.value || "cash";
    const amount = parseFloat(document.getElementById("transfer-amount")?.value) || 0;
    const note = document.getElementById("transfer-note")?.value.trim() || "";

    if (fromAcc === toAcc) {
      this.showToast("উৎস ও গন্তব্য অ্যাকাউন্ট ভিন্ন হতে হবে!", "warning");
      return;
    }
    if (amount <= 0) {
      this.showToast("সঠিক টাকার পরিমাণ দিন!", "warning");
      return;
    }

    const fromBal = this.getAccountBalance(fromAcc);
    if (amount > fromBal) {
      this.showToast(`${fromAcc.toUpperCase()} অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই! বর্তমান ব্যালেন্স: ৳${fromBal}`, "error");
      return;
    }

    const now = new Date().toISOString();
    const txId = this.generateId("TRF");
    const toBal = this.getAccountBalance(toAcc);

    const fromLabel = fromAcc === "bkash" ? "বিকাশ" : (fromAcc === "nagad" ? "নগদ" : (fromAcc === "bank" ? "ব্যাংক" : "ক্যাশ"));
    const toLabel = toAcc === "bkash" ? "বিকাশ" : (toAcc === "nagad" ? "নগদ" : (toAcc === "bank" ? "ব্যাংক" : "ক্যাশ"));

    // 1. Source Account Debit
    this.state.cashTransactions.unshift({
      id: this.generateId("TX"),
      date: now,
      account: fromAcc,
      type: `Transfer Out (${fromLabel} ➔ ${toLabel})`,
      refId: txId,
      description: note || `${fromLabel} হতে ${toLabel}-এ ট্রান্সফার`,
      in: 0,
      out: amount,
      balance: fromBal - amount
    });

    // 2. Destination Account Credit
    this.state.cashTransactions.unshift({
      id: this.generateId("TX"),
      date: now,
      account: toAcc,
      type: `Transfer In (${fromLabel} ➔ ${toLabel})`,
      refId: txId,
      description: note || `${fromLabel} হতে ${toLabel}-এ জমা`,
      in: amount,
      out: 0,
      balance: toBal + amount
    });

    this.addActivity("⇄", `ফান্ড ট্রান্সফার: ${fromLabel} ➔ ${toLabel}`, this.formatCurrency(amount));
    this.saveState();
    this.closeModal("modal-fund-transfer");
    this.renderAll();
    this.playSound("success");
    this.showToast(`৳${amount} সফলভাবে ${fromLabel} হতে ${toLabel}-এ ট্রান্সফার হয়েছে!`, "success");
  }

  // =========================================================
  // SALES HISTORY & RETURNS & SALE DELETION
  // =========================================================
  renderSalesHistory() {
    const tbody = document.getElementById("sales-table-body");
    if (!tbody) return;

    const search = (document.getElementById("sales-search-input")?.value || "").toLowerCase().trim();
    const dateFilter = document.getElementById("sales-date-filter")?.value || "";

    const filtered = this.state.sales.filter(s => {
      const matchesSearch = !search || s.id.toLowerCase().includes(search) || s.customerName.toLowerCase().includes(search);
      const matchesDate = !dateFilter || s.date.startsWith(dateFilter);
      return matchesSearch && matchesDate;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="text-center p-6 text-muted">কোনো বিক্রয় ইতিহাস পাওয়া যায়নি।</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(s => {
      const itemsStr = s.items.map(i => `${i.productName} [${i.sizeSummary || (i.size + ' x' + i.qty)}]`).join(", ");
      const totalPieces = s.items.reduce((acc, i) => acc + (i.totalQty || i.qty || 0), 0);
      const payLabel = s.paidBreakdown && Object.keys(s.paidBreakdown).length > 0 
        ? Object.entries(s.paidBreakdown).filter(([_, a]) => a > 0).map(([k, a]) => `${k === 'bkash' ? 'বিকাশ' : (k === 'nagad' ? 'নগদ' : (k === 'bank' ? 'ব্যাংক' : 'ক্যাশ'))}: ৳${a}`).join(", ")
        : (s.paymentMethod ? s.paymentMethod.toUpperCase() : "CASH");

      return `
        <tr>
          <td><strong>${s.id}</strong></td>
          <td>${this.formatDate(s.date)}</td>
          <td><strong>${s.customerName}</strong></td>
          <td>
            <span class="text-xs font-semibold">${itemsStr}</span>
            <div class="text-xs text-muted">মোট: ${totalPieces} pcs | মাধ্যম: ${payLabel}</div>
          </td>
          <td class="font-bold">${this.formatCurrency(s.grandTotal)}</td>
          <td class="font-bold text-emerald">${this.formatCurrency(s.paidAmount)}</td>
          <td class="font-bold ${s.dueAmount > 0 ? 'text-amber' : ''}">${this.formatCurrency(s.dueAmount)}</td>
          <td class="font-bold text-teal">${this.formatCurrency(s.grossProfit)}</td>
          <td>
            <span class="badge ${s.status === 'PAID' ? 'badge-success' : 'badge-warning'}">
              ${s.status === 'PAID' ? 'পরিশোধিত' : 'বকেয়া'}
            </span>
          </td>
          <td>
            <div class="table-action-group">
              <button class="btn-action btn-action-info" onclick="app.reprintSale('${s.id}')" title="ক্যাশ মেমো প্রিন্ট">🖨️ মেমো</button>
              <button class="btn-action btn-action-danger" onclick="app.openSalesReturnModal('${s.id}')" title="বিক্রয় ফেরত">↩️ ফেরত</button>
              <button class="btn-action btn-action-danger btn-action-icon-only" onclick="app.deleteSale('${s.id}')" title="বিক্রি বাতিল ও স্টক ফেরত">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  reprintSale(saleId) {
    const sale = this.state.sales.find(s => s.id === saleId);
    if (sale) this.showInvoiceModal(sale);
  }

  deleteSale(saleId, skipConfirm = false) {
    const sale = this.state.sales.find(s => s.id === saleId);

    const executeDelete = () => {
      const now = new Date().toISOString();

      if (sale) {
        // 1. RESTORE EXACT SIZE-WISE STOCK
        if (Array.isArray(sale.items)) {
          sale.items.forEach(item => {
            const prod = this.state.products.find(p => p.id === item.productId);
            if (prod) {
              if (item.sizes) {
                Object.entries(item.sizes).forEach(([size, qtyTaken]) => {
                  if (prod.variants) {
                    const v = prod.variants.find(x => x.size === size);
                    if (v) {
                      const prev = v.qty;
                      v.qty = Number(v.qty) + Number(qtyTaken);
                      this.state.stockMovements.unshift({
                        id: this.generateId("MOV"),
                        date: now,
                        productId: prod.id,
                        productName: prod.name,
                        variant: size,
                        change: Number(qtyTaken),
                        prevStock: prev,
                        newStock: v.qty,
                        reason: `বিক্রয় বাতিল রিস্টোর (Delete Sale ${saleId})`,
                        refId: saleId
                      });
                    }
                  }
                });
                prod.totalStock = prod.variants.reduce((a, b) => a + Number(b.qty), 0);
              } else if (item.size) {
                const v = prod.variants ? prod.variants.find(x => x.size === item.size) : null;
                if (v) {
                  v.qty = Number(v.qty) + Number(item.qty);
                }
                prod.totalStock = (prod.totalStock || 0) + Number(item.qty);
              }
            }
          });
        }

        // 2. REVERT CUSTOMER DUE
        if (sale.customerId && sale.customerId !== "walkin") {
          const cust = this.state.customers.find(c => c.id === sale.customerId);
          if (cust) {
            cust.totalPurchased = Math.max(0, (cust.totalPurchased || 0) - (sale.grandTotal || 0));
            cust.totalPaid = Math.max(0, (cust.totalPaid || 0) - (sale.paidAmount || 0));
            cust.due = Math.max(0, (cust.due || 0) - (sale.dueAmount || 0));
            if (cust.ledger) {
              cust.ledger = cust.ledger.filter(l => l.refId !== saleId);
            }
          }
        }

        // 3. REMOVE SALE
        this.state.sales = this.state.sales.filter(s => s.id !== saleId);
        this.addActivity("🗑️", `বিক্রি বাতিল ও স্টক রিস্টোর: ${sale.id} (${sale.customerName || 'কাস্টমার'})`, `৳ ${sale.grandTotal || 0}`);
      }

      // 4. REMOVE CASH TRANSACTIONS LINKED TO THIS SALE (ALWAYS ENSURED)
      this.state.cashTransactions = this.state.cashTransactions.filter(t => t.refId !== saleId && t.id !== saleId);

      this.saveState();
      this.renderAll();
      this.playSound("beep");
      this.showToast("বিক্রিটি বাতিল করা হয়েছে এবং সাইজ অনুযায়ী স্টক ফেরত এসেছে!", "success");
    };

    if (skipConfirm) {
      executeDelete();
    } else {
      if (!sale) {
        this.state.cashTransactions = this.state.cashTransactions.filter(t => t.refId !== saleId && t.id !== saleId);
        this.saveState();
        this.renderAll();
        this.showToast("লেনদেনটি মুছে ফেলা হয়েছে!", "success");
        return;
      }
      this.openConfirmModal(`⚠️ আপনি কি নিশ্চিত যে ${sale.id} বিক্রিটি বাতিল করতে চান? বিক্রিত সমস্ত সাইজ অনুযায়ী স্টক পুনরায় ফেরত যাবে।`, () => {
        executeDelete();
      });
    }
  }

  // --- SALES RETURN (বিক্রয় ফেরত) ---
  openSalesReturnModal(saleId) {
    const sale = this.state.sales.find(s => s.id === saleId);
    if (!sale) return;

    document.getElementById("ret-sale-id").value = sale.id;
    document.getElementById("ret-sale-summary").innerHTML = `
      <div class="flex-wrap justify-between">
        <div><strong>মেমো নং:</strong> ${sale.id} | <strong>তারিখ:</strong> ${this.formatDate(sale.date)}</div>
        <div><strong>কাস্টমার:</strong> ${sale.customerName}</div>
      </div>
    `;

    const tbody = document.getElementById("ret-items-tbody");
    if (!tbody) return;

    const rowsHtml = [];
    sale.items.forEach(item => {
      if (item.sizes) {
        Object.entries(item.sizes).forEach(([size, soldQty]) => {
          rowsHtml.push(`
            <tr data-prod-id="${item.productId}" data-size="${size}" data-price="${item.unitPrice}" data-cost="${item.costPrice}">
              <td><strong>${item.productName}</strong> <span class="badge badge-indigo">${size}</span></td>
              <td>${soldQty} pcs</td>
              <td>${this.formatCurrency(item.unitPrice)}</td>
              <td>
                <input type="number" class="form-control form-control-sm ret-qty-input font-bold" min="0" max="${soldQty}" value="0" oninput="app.calcSalesReturnRefund()">
              </td>
              <td class="ret-item-total font-bold text-emerald">৳ 0</td>
            </tr>
          `);
        });
      } else {
        rowsHtml.push(`
          <tr data-prod-id="${item.productId}" data-size="${item.size || 'Standard'}" data-price="${item.unitPrice}" data-cost="${item.costPrice}">
            <td><strong>${item.productName}</strong> (${item.size || 'Standard'})</td>
            <td>${item.qty} pcs</td>
            <td>${this.formatCurrency(item.unitPrice)}</td>
            <td>
              <input type="number" class="form-control form-control-sm ret-qty-input font-bold" min="0" max="${item.qty}" value="0" oninput="app.calcSalesReturnRefund()">
            </td>
            <td class="ret-item-total font-bold text-emerald">৳ 0</td>
          </tr>
        `);
      }
    });

    tbody.innerHTML = rowsHtml.join("");
    this.calcSalesReturnRefund();
    this.openModal("modal-sales-return");
  }

  calcSalesReturnRefund() {
    const rows = document.querySelectorAll("#ret-items-tbody tr");
    let totalRefund = 0;

    rows.forEach(row => {
      const price = parseFloat(row.getAttribute("data-price")) || 0;
      const qty = parseInt(row.querySelector(".ret-qty-input")?.value) || 0;
      const sub = qty * price;
      totalRefund += sub;
      row.querySelector(".ret-item-total").textContent = this.formatCurrency(sub);
    });

    document.getElementById("ret-total-refund-val").textContent = this.formatCurrency(totalRefund);
  }

  handleSalesReturnSubmit(e) {
    e.preventDefault();
    const saleId = document.getElementById("ret-sale-id").value;
    const sale = this.state.sales.find(s => s.id === saleId);
    if (!sale) return;

    const rows = document.querySelectorAll("#ret-items-tbody tr");
    const returnItems = [];
    let totalRefund = 0;
    let reversedCOGS = 0;

    rows.forEach(row => {
      const prodId = row.getAttribute("data-prod-id");
      const size = row.getAttribute("data-size");
      const unitPrice = parseFloat(row.getAttribute("data-price")) || 0;
      const costPrice = parseFloat(row.getAttribute("data-cost")) || 0;
      const returnQty = parseInt(row.querySelector(".ret-qty-input")?.value) || 0;

      if (returnQty > 0) {
        returnItems.push({ prodId, size, returnQty, unitPrice, costPrice });
        totalRefund += (returnQty * unitPrice);
        reversedCOGS += (returnQty * costPrice);
      }
    });

    if (returnItems.length === 0) {
      this.showToast("অনুগ্রহ করে অন্তত ১টি সাইজের ফেরত সংখ্যা লিখুন!", "warning");
      return;
    }

    const refundType = document.getElementById("ret-refund-type").value;
    const reason = document.getElementById("ret-reason").value.trim() || "বিক্রয় ফেরত";
    const returnId = this.generateId("RET");
    const now = new Date().toISOString();

    // RESTORE STOCK TO EXACT RETURNED SIZES
    returnItems.forEach(item => {
      const prod = this.state.products.find(p => p.id === item.prodId);
      if (prod) {
        let prevStock = 0;
        let newStock = 0;
        if (prod.variants) {
          const v = prod.variants.find(x => x.size === item.size);
          if (v) {
            prevStock = v.qty;
            v.qty = Number(v.qty) + item.returnQty;
            newStock = v.qty;
          }
          prod.totalStock = prod.variants.reduce((a, b) => a + Number(b.qty), 0);
        } else {
          prevStock = prod.totalStock;
          prod.totalStock = (prod.totalStock || 0) + item.returnQty;
          newStock = prod.totalStock;
        }

        this.state.stockMovements.unshift({
          id: this.generateId("MOV"),
          date: now,
          productId: prod.id,
          productName: prod.name,
          variant: item.size,
          change: item.returnQty,
          prevStock: prevStock,
          newStock: newStock,
          reason: `বিক্রয় ফেরত (Return ${returnId} for Sale ${saleId}) - ${reason}`,
          refId: returnId
        });
      }
    });

    if (refundType === "cash_refund" || refundType === "bkash_refund" || refundType === "nagad_refund" || refundType === "bank_refund") {
      const acc = refundType === "bkash_refund" ? "bkash" : (refundType === "nagad_refund" ? "nagad" : (refundType === "bank_refund" ? "bank" : "cash"));
      const prevBal = this.getAccountBalance(acc);
      const accLabel = acc === "bkash" ? "বিকাশ (bKash)" : (acc === "nagad" ? "নগদ (Nagad)" : (acc === "bank" ? "ব্যাংক (Bank)" : "ক্যাশ (Cash)"));

      this.state.cashTransactions.unshift({
        id: this.generateId("TX"),
        date: now,
        account: acc,
        type: `Sales Refund / বিক্রয় ফেরত টাকা প্রদান [${accLabel}]`,
        refId: returnId,
        description: `বিক্রয় ফেরত বাবদ ${accLabel} প্রদান (${sale.customerName})`,
        in: 0,
        out: totalRefund,
        balance: prevBal - totalRefund
      });
    } else if (refundType === "deduct_due") {
      if (sale.customerId && sale.customerId !== "walkin") {
        const cust = this.state.customers.find(c => c.id === sale.customerId);
        if (cust) {
          cust.due = Math.max(0, cust.due - totalRefund);
          if (!cust.ledger) cust.ledger = [];
          cust.ledger.unshift({
            id: this.generateId("LEDG"),
            date: now,
            type: "Sales Return Due Adjustment",
            refId: returnId,
            purchaseAmount: -totalRefund,
            paidAmount: 0,
            dueBalance: cust.due
          });
        }
      }
    }

    this.state.returns.unshift({
      id: returnId,
      date: now,
      saleId: sale.id,
      customerName: sale.customerName,
      items: returnItems,
      totalRefund,
      reversedCOGS,
      refundType,
      reason
    });

    this.addActivity("↩️", `বিক্রয় ফেরত গ্রহণ (${sale.customerName})`, `ফেরত: ${this.formatCurrency(totalRefund)}`);
    this.saveState();
    this.closeModal("modal-sales-return");
    this.renderAll();
    this.playSound("beep");
    this.showToast("বিক্রয় ফেরত সফলভাবে সম্পন্ন হয়েছে ও স্টক আপডেট হয়েছে!", "success");
  }

  // =========================================================
  // STOCK ADJUSTMENT & MOVEMENTS
  // =========================================================
  renderStockMovements() {
    const tbody = document.getElementById("stock-movements-table-body");
    const adjProdSelect = document.getElementById("adj-product-select");
    if (!tbody) return;

    if (adjProdSelect) {
      adjProdSelect.innerHTML = `
        <option value="">-- পণ্য নির্বাচন করুন --</option>
        ${this.state.products.map(p => `<option value="${p.id}">${p.name} (${p.category})</option>`).join("")}
      `;
    }

    if (this.state.stockMovements.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center p-6 text-muted">কোনো স্টক পরিবর্তন ইতিহাস নেই।</td></tr>`;
      return;
    }

    tbody.innerHTML = this.state.stockMovements.map(m => `
      <tr>
        <td>${this.formatDate(m.date)}</td>
        <td><strong>${m.productName}</strong> <span class="badge badge-indigo">${m.variant}</span></td>
        <td>${m.reason || "--"}</td>
        <td><strong class="${m.change > 0 ? 'text-emerald' : 'text-rose'}">${m.change > 0 ? `+${m.change}` : m.change} pcs</strong></td>
        <td>${m.prevStock} pcs</td>
        <td><strong>${m.newStock} pcs</strong></td>
        <td><span class="text-xs text-muted">${m.refId || "--"}</span></td>
      </tr>
    `).join("");
  }

  handleAdjProductChange() {
    const prodId = document.getElementById("adj-product-select").value;
    const varSelect = document.getElementById("adj-variant-select");
    if (!prodId || !varSelect) return;

    const prod = this.state.products.find(p => p.id === prodId);
    if (!prod) return;

    varSelect.innerHTML = prod.variants && prod.variants.length > 0
      ? prod.variants.map(v => `<option value="${v.size}" data-qty="${v.qty}">${v.size} (বর্তমান: ${v.qty} pcs)</option>`).join("")
      : `<option value="Standard" data-qty="${prod.totalStock}">Standard (বর্তমান: ${prod.totalStock} pcs)</option>`;

    this.handleAdjVariantChange();
  }

  handleAdjVariantChange() {
    const varSelect = document.getElementById("adj-variant-select");
    const selectedOpt = varSelect.options[varSelect.selectedIndex];
    const curQty = parseInt(selectedOpt?.getAttribute("data-qty")) || 0;
    document.getElementById("adj-current-stock-val").textContent = curQty;
    this.calcAdjNewStock();
  }

  calcAdjNewStock() {
    const curQty = parseInt(document.getElementById("adj-current-stock-val").textContent) || 0;
    const type = document.getElementById("adj-type").value;
    const qty = parseInt(document.getElementById("adj-qty").value) || 0;

    let newStock = curQty;
    if (type === "subtract") newStock = Math.max(0, curQty - qty);
    else if (type === "add") newStock = curQty + qty;
    else if (type === "set") newStock = Math.max(0, qty);

    document.getElementById("adj-new-stock-val").textContent = newStock;
  }

  handleStockAdjustmentSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById("adj-product-select").value;
    const variantSize = document.getElementById("adj-variant-select").value;
    const curQty = parseInt(document.getElementById("adj-current-stock-val").textContent) || 0;
    const newQty = parseInt(document.getElementById("adj-new-stock-val").textContent) || 0;
    const reason = document.getElementById("adj-reason").value;

    const prod = this.state.products.find(p => p.id === prodId);
    if (!prod) return;

    const change = newQty - curQty;
    if (change === 0) {
      this.showToast("স্টকে কোনো পরিবর্তন হয়নি!", "warning");
      return;
    }

    const adjId = this.generateId("ADJ");
    const now = new Date().toISOString();

    if (prod.variants) {
      const v = prod.variants.find(x => x.size === variantSize);
      if (v) v.qty = newQty;
      prod.totalStock = prod.variants.reduce((a, b) => a + Number(b.qty), 0);
    } else {
      prod.totalStock = newQty;
    }

    this.state.stockMovements.unshift({
      id: this.generateId("MOV"),
      date: now,
      productId: prod.id,
      productName: prod.name,
      variant: variantSize,
      change: change,
      prevStock: curQty,
      newStock: newQty,
      reason: `ম্যানুয়াল এডজাস্টমেন্ট: ${reason}`,
      refId: adjId
    });

    this.addActivity("⚖️", `স্টক এডজাস্ট: ${prod.name} (${variantSize})`, `${change > 0 ? `+${change}` : change} pcs (${reason})`);
    this.saveState();
    this.closeModal("modal-stock-adjustment");
    this.renderAll();
    this.playSound("beep");
    this.showToast("স্টক এডজাস্টমেন্ট সফলভাবে সম্পন্ন হয়েছে!", "success");
  }

  // =========================================================
  // REPORTS & PROFIT/LOSS STATEMENT (Mockup 8)
  // =========================================================
  renderReports() {
    const periodSelect = document.getElementById("report-period-select");
    const periodPill = periodSelect ? periodSelect.value : (this.currentReportPeriod || "today");
    const customStart = document.getElementById("report-start-date")?.value;
    const customEnd = document.getElementById("report-end-date")?.value;

    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const weekStartStr = startOfWeek.toISOString().split("T")[0];

    const monthStartStr = now.toISOString().slice(0, 7);
    const yearStartStr = now.getFullYear().toString();

    let periodSales = 0;
    let periodCOGS = 0;
    let periodExpenses = 0;
    let salesCount = 0;
    let expCount = 0;
    const catSalesMap = {};
    const catExpenseMap = {};

    // Hourly buckets (8AM, 10AM, 12PM, 2PM, 4PM, 6PM, 8PM)
    const hourlyBuckets = {
      "8AM": 0,
      "10AM": 0,
      "12PM": 0,
      "2PM": 0,
      "4PM": 0,
      "6PM": 0,
      "8PM": 0
    };

    const isMatchDate = (isoDate) => {
      const d = isoDate.split("T")[0];
      if (periodPill === "today") return d === todayStr;
      if (periodPill === "yesterday") return d === yesterdayStr;
      if (periodPill === "this_week") return d >= weekStartStr && d <= todayStr;
      if (periodPill === "this_month") return d.startsWith(monthStartStr);
      if (periodPill === "this_year") return d.startsWith(yearStartStr);
      if (periodPill === "custom" && customStart && customEnd) return d >= customStart && d <= customEnd;
      return true;
    };

    this.state.sales.forEach(sale => {
      if (isMatchDate(sale.date)) {
        periodSales += (sale.grandTotal || 0);
        periodCOGS += (sale.totalCOGS || 0);
        salesCount++;

        // Calculate hour bucket
        try {
          const saleTime = new Date(sale.date);
          const hour = saleTime.getHours();
          if (hour <= 9) hourlyBuckets["8AM"] += (sale.grandTotal || 0);
          else if (hour <= 11) hourlyBuckets["10AM"] += (sale.grandTotal || 0);
          else if (hour <= 13) hourlyBuckets["12PM"] += (sale.grandTotal || 0);
          else if (hour <= 15) hourlyBuckets["2PM"] += (sale.grandTotal || 0);
          else if (hour <= 17) hourlyBuckets["4PM"] += (sale.grandTotal || 0);
          else if (hour <= 19) hourlyBuckets["6PM"] += (sale.grandTotal || 0);
          else hourlyBuckets["8PM"] += (sale.grandTotal || 0);
        } catch (e) {}

        sale.items.forEach(i => {
          if (!catSalesMap[i.category]) catSalesMap[i.category] = { revenue: 0, profit: 0, qty: 0 };
          catSalesMap[i.category].revenue += (i.total || 0);
          catSalesMap[i.category].profit += (i.profit || 0);
          catSalesMap[i.category].qty += (i.totalQty || i.qty || 0);
        });
      }
    });

    this.state.expenses.forEach(exp => {
      if (isMatchDate(exp.date)) {
        periodExpenses += exp.amount;
        expCount++;
        catExpenseMap[exp.category] = (catExpenseMap[exp.category] || 0) + exp.amount;
      }
    });

    const periodGrossProfit = periodSales - periodCOGS;
    const periodNetProfit = periodGrossProfit - periodExpenses;
    const avgSales = salesCount > 0 ? Math.round(periodSales / (periodPill === "today" || periodPill === "yesterday" ? 1 : (periodPill === "this_week" ? 7 : 30))) : 0;

    // Populate the 4 Report KPI Cards (Mockup 8)
    const kpiSalesEl = document.getElementById("rep-kpi-sales");
    if (kpiSalesEl) kpiSalesEl.textContent = this.formatCurrency(periodSales);

    const kpiBillsEl = document.getElementById("rep-kpi-bills-count");
    if (kpiBillsEl) kpiBillsEl.textContent = `${salesCount} টি বিল`;

    const kpiExpenseEl = document.getElementById("rep-kpi-expense");
    if (kpiExpenseEl) kpiExpenseEl.textContent = this.formatCurrency(periodExpenses);

    const kpiExpCountEl = document.getElementById("rep-kpi-exp-count");
    if (kpiExpCountEl) kpiExpCountEl.textContent = `${expCount} টি এন্ট্রি`;

    const kpiNetProfitEl = document.getElementById("rep-kpi-net-profit");
    if (kpiNetProfitEl) kpiNetProfitEl.textContent = this.formatCurrency(periodNetProfit);

    const kpiAvgSalesEl = document.getElementById("rep-kpi-avg-sales");
    if (kpiAvgSalesEl) kpiAvgSalesEl.textContent = this.formatCurrency(avgSales > 0 ? avgSales : periodSales);

    // Render Hourly / Periodic Sales Bar Chart
    const chartBarsContainer = document.getElementById("reports-hourly-chart-bars");
    if (chartBarsContainer) {
      const maxHourly = Math.max(1, ...Object.values(hourlyBuckets));
      chartBarsContainer.innerHTML = Object.entries(hourlyBuckets).map(([slot, amt]) => {
        const heightPct = Math.max(12, Math.min(100, Math.round((amt / maxHourly) * 100)));
        const isPeak = amt === maxHourly && amt > 0;
        return `
          <div class="chart-bar-col" title="${slot}: ৳${amt.toLocaleString('bn-BD')}">
            <div class="chart-bar-pill ${isPeak ? 'peak' : ''}" style="height: ${heightPct}%;">
              ${amt > 0 ? `<span class="chart-bar-badge">৳${amt >= 1000 ? (amt/1000).toFixed(1)+'k' : amt}</span>` : ''}
            </div>
            <span class="chart-bar-time">${slot}</span>
          </div>
        `;
      }).join("");
    }

    // Profit & Loss Statement table
    const plRev = document.getElementById("pl-revenue");
    if (plRev) plRev.textContent = this.formatCurrency(periodSales);
    const plCogs = document.getElementById("pl-cogs");
    if (plCogs) plCogs.innerHTML = `&minus; ${this.formatCurrency(periodCOGS)}`;
    const plGross = document.getElementById("pl-gross-profit");
    if (plGross) plGross.textContent = this.formatCurrency(periodGrossProfit);
    const plExp = document.getElementById("pl-expenses");
    if (plExp) plExp.innerHTML = `&minus; ${this.formatCurrency(periodExpenses)}`;
    const plNet = document.getElementById("pl-net-profit");
    if (plNet) plNet.textContent = this.formatCurrency(periodNetProfit);

    const periodLabels = {
      today: "আজকে (Today)",
      yesterday: "গতকাল (Yesterday)",
      this_week: "চলতি সপ্তাহ (This Week)",
      this_month: "চলতি মাস (This Month)",
      this_year: "চলতি বছর (This Year)",
      all_time: "সর্বমোট (All Time)",
      custom: `কাস্টম (${customStart || ''} হতে ${customEnd || ''})`
    };
    const periodLabelEl = document.getElementById("report-period-label");
    if (periodLabelEl) periodLabelEl.textContent = periodLabels[periodPill] || "আজকে";

    // Category Sales Breakdown Visualization
    const catSalesEl = document.getElementById("report-category-breakdown");
    if (catSalesEl) {
      const cats = Object.keys(catSalesMap);
      if (cats.length === 0) {
        catSalesEl.innerHTML = `<p class="text-muted text-center p-3">এই সময়কালের কোনো বিক্রয় ডাটা নেই।</p>`;
      } else {
        const maxVal = Math.max(...cats.map(c => catSalesMap[c].revenue));
        catSalesEl.innerHTML = cats.map(c => {
          const item = catSalesMap[c];
          const pct = maxVal > 0 ? (item.revenue / maxVal) * 100 : 0;
          return `
            <div class="breakdown-bar-item">
              <div class="breakdown-bar-header">
                <span>${c} (${item.qty} pcs)</span>
                <span class="text-emerald font-bold">${this.formatCurrency(item.revenue)} (লাভ: ৳${item.profit})</span>
              </div>
              <div class="breakdown-progress-track">
                <div class="breakdown-progress-fill" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join("");
      }
    }

    // Expense Breakdown Visualization
    const expBreakdownEl = document.getElementById("report-expense-breakdown");
    if (expBreakdownEl) {
      const expCats = Object.keys(catExpenseMap);
      if (expCats.length === 0) {
        expBreakdownEl.innerHTML = `<p class="text-muted text-center p-3">এই সময়কালের কোনো খরচ নেই।</p>`;
      } else {
        const maxExp = Math.max(...expCats.map(c => catExpenseMap[c]));
        expBreakdownEl.innerHTML = expCats.map(c => {
          const amt = catExpenseMap[c];
          const pct = maxExp > 0 ? (amt / maxExp) * 100 : 0;
          return `
            <div class="breakdown-bar-item">
              <div class="breakdown-bar-header">
                <span>${c}</span>
                <span class="text-rose font-bold">${this.formatCurrency(amt)}</span>
              </div>
              <div class="breakdown-progress-track">
                <div class="breakdown-progress-fill" style="width: ${pct}%; background: linear-gradient(90deg, var(--rose), #e11d48);"></div>
              </div>
            </div>
          `;
        }).join("");
      }
    }
  }

  handleReportPeriodChange(period) {
    this.currentReportPeriod = period;
    const customDateBox = document.getElementById("report-custom-dates");
    if (customDateBox) customDateBox.classList.toggle("hidden", period !== "custom");
    this.renderReports();
  }

  switchReportMetric(metric) {
    this.currentReportMetric = metric;
    document.querySelectorAll("#report-metric-pills .pill").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-metric") === metric);
    });
    this.renderReports();
  }

  // =========================================================
  // CUSTOMER DETAILS VIEW (Mockup 6)
  // =========================================================
  openCustomerDetails(customerId) {
    this.activeCustomerId = customerId;
    this.navigateTo("customer-details");
    this.renderCustomerDetails(customerId);
  }

  renderCustomerDetails(customerId) {
    const id = customerId || this.activeCustomerId;
    let customer = this.state.customers.find(c => c.id === id);
    if (!customer && this.state.customers.length > 0) {
      customer = this.state.customers[0];
      this.activeCustomerId = customer.id;
    }
    if (!customer) return;

    const initial = customer.name ? customer.name.trim().charAt(0).toUpperCase() : "C";
    const avatarEl = document.getElementById("cust-detail-avatar");
    if (avatarEl) avatarEl.textContent = initial;

    const nameEl = document.getElementById("cust-detail-name");
    if (nameEl) nameEl.textContent = customer.name;

    const phoneEl = document.getElementById("cust-detail-phone");
    if (phoneEl) phoneEl.textContent = customer.phone;

    const addrEl = document.getElementById("cust-detail-address");
    if (addrEl) addrEl.textContent = customer.address || "ঠিকানা দেওয়া নেই";

    const callBtn = document.getElementById("cust-detail-call-btn");
    if (callBtn) callBtn.setAttribute("href", `tel:${customer.phone.replace(/[^0-9+]/g, '')}`);

    const totPurchasedEl = document.getElementById("cust-detail-total-purchased");
    if (totPurchasedEl) totPurchasedEl.textContent = this.formatCurrency(customer.totalPurchased || 0);

    const totPaidEl = document.getElementById("cust-detail-total-paid");
    if (totPaidEl) totPaidEl.textContent = this.formatCurrency(customer.totalPaid || 0);

    const curDueEl = document.getElementById("cust-detail-current-due");
    if (curDueEl) curDueEl.textContent = this.formatCurrency(customer.due || 0);

    // Render Ledger list
    const ledgerContainer = document.getElementById("cust-detail-ledger-list");
    if (ledgerContainer) {
      const ledger = customer.ledger && customer.ledger.length > 0 ? customer.ledger : [];
      if (ledger.length === 0) {
        ledgerContainer.innerHTML = `
          <div class="text-center p-4 text-muted">
            <p class="text-xs">কোনো লেনদেনের ইতিহাস পাওয়া যায়নি।</p>
          </div>
        `;
      } else {
        ledgerContainer.innerHTML = ledger.map(entry => {
          const isPayment = entry.paidAmount > 0 && (!entry.purchaseAmount || entry.purchaseAmount === 0);
          return `
            <div class="cust-ledger-row">
              <div class="ledger-row-left">
                <div class="ledger-type-badge ${isPayment ? 'badge-success' : 'badge-primary'}">
                  ${isPayment ? '💵 জমা' : '🛒 বিক্রি'}
                </div>
                <div>
                  <div class="ledger-desc font-bold text-sm">${entry.type || entry.description || (isPayment ? 'বাকি আদায়' : 'পণ্য ক্রয়')}</div>
                  <div class="ledger-date text-xs text-muted">${this.formatDate(entry.date)}</div>
                </div>
              </div>
              <div class="ledger-row-right text-right">
                <div class="ledger-amount font-bold ${isPayment ? 'text-emerald' : 'text-main'}">
                  ${isPayment ? `- ${this.formatCurrency(entry.paidAmount)}` : `+ ${this.formatCurrency(entry.purchaseAmount)}`}
                </div>
                <div class="ledger-balance text-xs text-muted">
                  অবশিষ্ট বাকি: <strong class="text-rose">${this.formatCurrency(entry.dueBalance || 0)}</strong>
                </div>
              </div>
            </div>
          `;
        }).join("");
      }
    }
  }

  startPosForCustomerFromDetails() {
    if (!this.activeCustomerId) return;
    this.navigateTo("pos");
    const custSelect = document.getElementById("pos-customer-select");
    if (custSelect) {
      custSelect.value = this.activeCustomerId;
      this.handlePosCustomerChange();
    }
    this.switchMobilePosTab("products");
    this.showToast("কাস্টমার সিলেক্ট করা হয়েছে। পণ্য নির্বাচন করুন।", "info");
  }

  openDueCollectionFromDetails() {
    if (!this.activeCustomerId) return;
    this.openDueCollection(this.activeCustomerId);
  }

  // =========================================================
  // MENU & SHOP PROFILE (Mockup 7)
  // =========================================================
  renderMenu() {
    const s = this.state.settings;
    const nameEl = document.getElementById("menu-shop-name-val");
    if (nameEl) nameEl.textContent = s.shopName || "Faiza Zone";
    const emailEl = document.getElementById("menu-shop-email-val");
    if (emailEl) emailEl.textContent = s.email || "faizazone@gmail.com";
    const ownerEl = document.getElementById("menu-shop-owner-val");
    if (ownerEl) ownerEl.textContent = `${s.ownerName || 'Md Ripon'} (Owner)`;
  }

  handleLogout() {
    this.openConfirmModal("⚠️ আপনি কি নিশ্চিত যে লগ আউট করতে চান?", () => {
      this.showToast("সফলভাবে লগআউট করা হয়েছে!", "success");
      this.navigateTo("dashboard");
    });
  }

  // =========================================================
  // BARCODE SCANNING HELPER
  // =========================================================
  triggerBarcodeScan() {
    this.showToast("📷 ক্যামেরা বা বারকোড স্ক্যানার দিয়ে স্ক্যান করুন অথবা পণ্যের নাম/SKU লিখুন।", "info");
    const posInput = document.getElementById("pos-search-input");
    if (posInput) {
      posInput.focus();
      posInput.select();
    }
  }

  // =========================================================
  // CATEGORY MANAGER MODAL
  // =========================================================
  openCategoryManager() {
    this.renderCategoryManager();
    this.openModal("modal-manage-categories");
  }

  renderCategoryManager() {
    const listEl = document.getElementById("manage-categories-list");
    if (!listEl) return;
    const cats = this.state.categories || ["Shirt", "T-Shirt", "Polo", "Pants", "Jeans", "Panjabi", "Kabli", "Three Piece", "Kids", "Others"];
    listEl.innerHTML = cats.map(cat => `
      <div class="cat-manage-item">
        <div class="cat-item-left">
          <span class="cat-bullet">●</span>
          <span class="cat-name-text font-bold">${cat}</span>
        </div>
        <button type="button" class="btn-ghost text-rose" onclick="app.deleteCategoryFromManager('${cat}')" title="মুছে ফেলুন">&times;</button>
      </div>
    `).join("");
  }

  addCategoryFromManager() {
    const input = document.getElementById("manage-new-category-input");
    if (!input) return;
    const val = input.value.trim();
    if (!val) {
      this.showToast("ক্যাটাগরির নাম লিখুন!", "warning");
      return;
    }
    if (!this.state.categories) this.state.categories = ["Shirt", "T-Shirt", "Polo", "Pants", "Jeans", "Panjabi", "Kabli", "Three Piece", "Kids", "Others"];
    if (this.state.categories.includes(val)) {
      this.showToast("এই ক্যাটাগরি ইতিমধ্যে তালিকায় রয়েছে!", "info");
      return;
    }
    this.state.categories.push(val);
    this.saveState();
    this.populateCategoryDropdowns();
    this.renderCategoryManager();
    input.value = "";
    this.showToast(`ক্যাটাগরি "${val}" যোগ হয়েছে!`, "success");
  }

  deleteCategoryFromManager(catName) {
    this.openConfirmModal(`আপনি কি ক্যাটাগরি "${catName}" মুছে ফেলতে চান?`, () => {
      if (!this.state.categories) return;
      this.state.categories = this.state.categories.filter(c => c !== catName);
      this.saveState();
      this.populateCategoryDropdowns();
      this.renderCategoryManager();
      this.showToast(`ক্যাটাগরি "${catName}" মুছে ফেলা হয়েছে!`, "info");
    });
  }

  // =========================================================
  // SETTINGS & BACKUP / RESTORE
  // =========================================================
  renderSettings() {
    const s = this.state.settings;
    document.getElementById("setting-shop-name").value = s.shopName || "Faiza Zone";
    document.getElementById("setting-shop-tagline").value = s.tagline || "";
    document.getElementById("setting-shop-phone").value = s.phone || "";
    document.getElementById("setting-shop-email").value = s.email || "";
    document.getElementById("setting-shop-address").value = s.address || "";
    document.getElementById("setting-invoice-footer").value = s.invoiceFooter || "";
    document.getElementById("setting-low-stock").value = s.lowStockThreshold || 5;
    document.getElementById("shop-title-sidebar").textContent = s.shopName || "FAIZA ZONE";
  }

  saveSettings(e) {
    e.preventDefault();
    this.state.settings.shopName = document.getElementById("setting-shop-name").value.trim();
    this.state.settings.tagline = document.getElementById("setting-shop-tagline").value.trim();
    this.state.settings.phone = document.getElementById("setting-shop-phone").value.trim();
    this.state.settings.email = document.getElementById("setting-shop-email").value.trim();
    this.state.settings.address = document.getElementById("setting-shop-address").value.trim();
    this.state.settings.invoiceFooter = document.getElementById("setting-invoice-footer").value.trim();
    this.state.settings.lowStockThreshold = parseInt(document.getElementById("setting-low-stock").value) || 5;

    this.saveState();
    this.renderHeader();
    this.showToast("সেটিংস সফলভাবে সংরক্ষিত হয়েছে!", "success");
  }

  downloadBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement('a');
    const dateStr = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `faiza-zone-backup-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("ব্যাকআপ ফাইল সফলভাবে ডাউনলোড হয়েছে!", "success");
  }

  handleFileRestore(e) {
    const file = e.target.files[0];
    if (!file) return;

    this.openConfirmModal("⚠️ ব্যাকআপ ফাইল রিস্টোর করলে বর্তমান সমস্ত তথ্য প্রতিস্থাপিত হবে। আপনি কি নিশ্চিত?", () => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.products && Array.isArray(imported.products)) {
            this.state = imported;
            this.saveState();
            this.renderAll();
            this.showToast("ডাটা সফলভাবে রিস্টোর হয়েছে!", "success");
          } else {
            this.showToast("ভুল ব্যাকআপ ফরম্যাট! সঠিক JSON ফাইল আপলোড করুন।", "error");
          }
        } catch (err) {
          this.showToast("ফাইল পড়তে ত্রুটি হয়েছে!", "error");
        }
      };
      reader.readAsText(file);
    });
    e.target.value = "";
  }

  resetDemoData() {
    this.openConfirmModal("⚠️ আপনি কি নিশ্চিত যে সমস্ত ডাটা মুছে প্রারম্ভিক ডেমো ডাটায় (Sleeve Shirt, Polo Shirt, Pants, T-Shirt) ফিরে যেতে চান?", () => {
      this.state = JSON.parse(JSON.stringify(INITIAL_DEMO_STATE));
      this.saveState();
      this.renderAll();
      this.showToast("ডেমো ডাটা সফলভাবে রিসেট হয়েছে!", "success");
    });
  }

  // --- CSV EXPORT FUNCTIONS ---
  exportCsv(filename, headers, rows) {
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.showToast(`${filename} ডাউনলোড হয়েছে!`, "success");
  }

  exportInventoryCsv() {
    const headers = ["ID", "Name", "Category", "SKU", "Sizes Breakdown", "Cost Price", "Selling Price", "Total Stock", "Stock Cost", "Stock Value"];
    const rows = this.state.products.map(p => {
      const q = p.variants ? p.variants.reduce((a, b) => a + Number(b.qty), 0) : p.totalStock;
      const sizeStr = p.variants ? p.variants.map(v => `${v.size}:${v.qty}`).join(";") : "Single";
      return [
        `"${p.id}"`,
        `"${p.name}"`,
        `"${p.category}"`,
        `"${p.sku || ''}"`,
        `"${sizeStr}"`,
        p.purchasePrice,
        p.sellingPrice,
        q,
        q * p.purchasePrice,
        q * p.sellingPrice
      ];
    });
    this.exportCsv("faiza-zone-inventory.csv", headers, rows);
  }

  exportSalesCsv() {
    const headers = ["Invoice ID", "Date", "Customer", "Items & Sizes", "Subtotal", "Discount", "Grand Total", "COGS", "Profit", "Paid", "Due", "Payment Method"];
    const rows = this.state.sales.map(s => {
      const itemsStr = s.items.map(i => `${i.productName} (${i.sizeSummary})`).join("; ");
      return [
        `"${s.id}"`,
        `"${s.date}"`,
        `"${s.customerName}"`,
        `"${itemsStr}"`,
        s.subtotal,
        s.discount,
        s.grandTotal,
        s.totalCOGS,
        s.grossProfit,
        s.paidAmount,
        s.dueAmount,
        `"${s.paymentMethod}"`
      ];
    });
    this.exportCsv("faiza-zone-sales.csv", headers, rows);
  }

  exportPurchasesCsv() {
    const headers = ["Purchase ID", "Date", "Product", "Variant", "Quantity", "Unit Cost", "Total Cost", "Paid", "Due", "Supplier"];
    const rows = this.state.purchases.map(p => [
      `"${p.id}"`,
      `"${p.date}"`,
      `"${p.productName}"`,
      `"${p.variant}"`,
      p.qty,
      p.unitCost,
      p.totalCost,
      p.paidAmount,
      p.dueAmount,
      `"${p.supplier || ''}"`
    ]);
    this.exportCsv("faiza-zone-purchases.csv", headers, rows);
  }

  exportExpensesCsv() {
    const headers = ["Expense ID", "Date", "Category", "Amount", "Method", "Note"];
    const rows = this.state.expenses.map(e => [
      `"${e.id}"`,
      `"${e.date}"`,
      `"${e.category}"`,
      e.amount,
      `"${e.method}"`,
      `"${e.note || ''}"`
    ]);
    this.exportCsv("faiza-zone-expenses.csv", headers, rows);
  }

  exportCustomersCsv() {
    const headers = ["Customer ID", "Name", "Phone", "Address", "Total Purchased", "Total Paid", "Current Due"];
    const rows = this.state.customers.map(c => [
      `"${c.id}"`,
      `"${c.name}"`,
      `"${c.phone}"`,
      `"${c.address || ''}"`,
      c.totalPurchased || 0,
      c.totalPaid || 0,
      c.due || 0
    ]);
    this.exportCsv("faiza-zone-customers.csv", headers, rows);
  }

  // --- MODAL CONTROLLER ---
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  }

  openConfirmModal(msg, onConfirm) {
    document.getElementById("confirm-message").textContent = msg;
    this.confirmCallback = onConfirm;
    this.openModal("modal-confirm");
  }

  closeConfirmModal(isConfirmed) {
    const cb = this.confirmCallback;
    this.confirmCallback = null;
    this.closeModal("modal-confirm");
    if (isConfirmed && typeof cb === "function") {
      cb();
    }
  }

  // --- TOAST NOTIFICATIONS ---
  showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "✅" : (type === "warning" ? "⚠️" : (type === "info" ? "ℹ️" : "❌"));
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // =========================================================
  // DOM EVENT LISTENERS & SETUP
  // =========================================================
  setupEventListeners() {
    // Navigation items (Sidebar & Bottom nav)
    document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        if (view) this.navigateTo(view);
      });
    });

    // Mobile drawer toggling & backdrop click
    document.getElementById("mobile-menu-btn")?.addEventListener("click", () => this.openMobileDrawer());
    document.getElementById("sidebar-close-btn")?.addEventListener("click", () => this.closeMobileDrawer());
    document.getElementById("sidebar-backdrop")?.addEventListener("click", () => this.closeMobileDrawer());
    document.getElementById("mobile-menu-more-btn")?.addEventListener("click", () => this.openMobileDrawer());

    // Top Header POS shortcut & Cash register chip
    document.getElementById("header-pos-btn")?.addEventListener("click", () => this.showPos());
    document.getElementById("header-cash-chip")?.addEventListener("click", () => this.navigateTo("cashflow"));

    // Language & Theme & Sound toggles
    document.getElementById("lang-toggle-btn")?.addEventListener("click", () => this.toggleLanguage());
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => this.toggleTheme());

    // POS Search & Filter
    const posSearchInput = document.getElementById("pos-search-input");
    const posSearchClear = document.getElementById("pos-search-clear");
    posSearchInput?.addEventListener("input", () => {
      posSearchClear.classList.toggle("hidden", !posSearchInput.value);
      this.renderPosProducts();
    });
    posSearchClear?.addEventListener("click", () => {
      posSearchInput.value = "";
      posSearchClear.classList.add("hidden");
      this.renderPosProducts();
    });

    // POS Category Pills
    document.querySelectorAll("#pos-category-pills .pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#pos-category-pills .pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.renderPosProducts();
      });
    });

    // POS Customer Select
    document.getElementById("pos-customer-select")?.addEventListener("change", () => this.handlePosCustomerChange());
    document.getElementById("pos-add-customer-btn")?.addEventListener("click", () => {
      document.getElementById("cust-modal-title").textContent = "নতুন কাস্টমার যোগ";
      document.getElementById("cust-form-id").value = "";
      document.getElementById("cust-name").value = "";
      document.getElementById("cust-phone").value = "";
      document.getElementById("cust-address").value = "";
      document.getElementById("cust-initial-due").parentElement.classList.remove("hidden");
      this.openModal("modal-add-customer");
    });

    // POS Discount & Payment changes
    document.getElementById("pos-discount-input")?.addEventListener("input", () => this.calcPosTotals());
    document.getElementById("pos-discount-type")?.addEventListener("change", () => this.calcPosTotals());
    
    document.getElementById("pos-paid-amount")?.addEventListener("input", () => {
      document.getElementById("pos-paid-amount")?.setAttribute("data-auto", "false");
      const subtotalVal = this.cart.reduce((sum, item) => sum + item.total, 0);
      const discountVal = parseFloat(document.getElementById("pos-discount-input")?.value) || 0;
      const discountType = document.getElementById("pos-discount-type")?.value || "fixed";
      let discountAmount = discountType === "percent" ? (subtotalVal * discountVal) / 100 : discountVal;
      discountAmount = Math.min(subtotalVal, Math.max(0, discountAmount));
      const grandTotal = Math.max(0, subtotalVal - discountAmount);

      const paidVal = Math.min(grandTotal, Math.max(0, parseFloat(document.getElementById("pos-paid-amount")?.value) || 0));
      const dueInput = document.getElementById("pos-due-amount");
      if (dueInput) dueInput.value = Math.max(0, grandTotal - paidVal);

      if (paidVal === 0) {
        document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(p => p.classList.remove("active"));
        document.querySelector("#pos-payment-pills .pay-pill[data-method='due']")?.classList.add("active");
      } else {
        const activeMethod = document.querySelector("#pos-payment-pills .pay-pill.active")?.getAttribute("data-method");
        if (activeMethod === "due") {
          document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(p => p.classList.remove("active"));
          document.querySelector("#pos-payment-pills .pay-pill[data-method='cash']")?.classList.add("active");
        }
      }

      this.calcPosTotals();
    });

    document.getElementById("pos-due-amount")?.addEventListener("input", () => {
      const subtotalVal = this.cart.reduce((sum, item) => sum + item.total, 0);
      const discountVal = parseFloat(document.getElementById("pos-discount-input")?.value) || 0;
      const discountType = document.getElementById("pos-discount-type")?.value || "fixed";
      let discountAmount = discountType === "percent" ? (subtotalVal * discountVal) / 100 : discountVal;
      discountAmount = Math.min(subtotalVal, Math.max(0, discountAmount));
      const grandTotal = Math.max(0, subtotalVal - discountAmount);

      const dueInput = document.getElementById("pos-due-amount");
      const paidInput = document.getElementById("pos-paid-amount");
      const dueVal = Math.min(grandTotal, Math.max(0, parseFloat(dueInput?.value) || 0));
      const newPaid = Math.max(0, grandTotal - dueVal);

      if (paidInput) {
        paidInput.value = newPaid;
        paidInput.setAttribute("data-auto", "false");
      }

      if (dueVal === grandTotal) {
        document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(p => p.classList.remove("active"));
        document.querySelector("#pos-payment-pills .pay-pill[data-method='due']")?.classList.add("active");
      } else if (dueVal === 0) {
        const activeMethod = document.querySelector("#pos-payment-pills .pay-pill.active")?.getAttribute("data-method");
        if (activeMethod === "due") {
          document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(p => p.classList.remove("active"));
          document.querySelector("#pos-payment-pills .pay-pill[data-method='cash']")?.classList.add("active");
        }
      }

      this.calcPosTotals();
    });

    // POS Multi-Account Split Inputs
    ["pos-split-cash", "pos-split-bkash", "pos-split-nagad", "pos-split-bank"].forEach(id => {
      document.getElementById(id)?.addEventListener("input", () => this.calcPosTotals());
    });

    document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#pos-payment-pills .pay-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const method = pill.getAttribute("data-method");
        if (method !== "split" && document.getElementById("pos-paid-amount")) {
          if (method === "due") {
            document.getElementById("pos-paid-amount").setAttribute("data-auto", "false");
          } else {
            document.getElementById("pos-paid-amount").setAttribute("data-auto", "true");
          }
        }
        this.calcPosTotals();
      });
    });

    // Cashflow Account Filter Pills
    document.querySelectorAll("#cf-account-filter-pills .pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#cf-account-filter-pills .pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentCashflowAccount = pill.getAttribute("data-account") || "all";
        this.renderCashflow();
      });
    });

    // POS Action buttons
    document.getElementById("pos-clear-cart-btn")?.addEventListener("click", () => this.clearCart());
    document.getElementById("pos-checkout-btn")?.addEventListener("click", () => this.handlePosCheckout());

    // Inventory Search & Filters
    document.getElementById("inv-search-input")?.addEventListener("input", () => this.renderInventory());
    document.getElementById("inv-category-filter")?.addEventListener("change", () => this.renderInventory());
    document.getElementById("inv-stock-filter")?.addEventListener("change", () => this.renderInventory());

    // Inventory Category Filter Pills (Mobile & Desktop)
    document.querySelectorAll("#inv-category-pills .pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#inv-category-pills .pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const cat = pill.getAttribute("data-category") || "ALL";
        const catFilterSelect = document.getElementById("inv-category-filter");
        if (catFilterSelect) catFilterSelect.value = cat;
        this.renderInventory();
      });
    });

    // Purchases Search
    document.getElementById("purchases-search-input")?.addEventListener("input", () => this.renderPurchases());

    // Customer Search & Filter
    document.getElementById("cust-search-input")?.addEventListener("input", () => this.renderCustomers());
    document.getElementById("cust-filter-status")?.addEventListener("change", () => this.renderCustomers());

    // Customer Filter Pills (সব, বাকি আছে, পরিশোধিত)
    document.querySelectorAll("#cust-filter-pills .pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#cust-filter-pills .pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const filter = pill.getAttribute("data-filter") || "all";
        const filterSelect = document.getElementById("cust-filter-status");
        if (filterSelect) filterSelect.value = filter;
        this.renderCustomers();
      });
    });

    // Expenses Search & Filters
    document.getElementById("exp-search-input")?.addEventListener("input", () => this.renderExpenses());
    document.getElementById("exp-category-filter")?.addEventListener("change", () => this.renderExpenses());
    document.getElementById("exp-date-filter")?.addEventListener("change", () => this.renderExpenses());

    // Sales History Search & Filters
    document.getElementById("sales-search-input")?.addEventListener("input", () => this.renderSalesHistory());
    document.getElementById("sales-date-filter")?.addEventListener("change", () => this.renderSalesHistory());

    // Report Period Pills
    document.querySelectorAll(".report-period-pills .pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".report-period-pills .pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const period = pill.getAttribute("data-period");
        const customDateBox = document.getElementById("report-custom-dates");
        if (customDateBox) customDateBox.classList.toggle("hidden", period !== "custom");
        this.renderReports();
      });
    });
    document.getElementById("report-apply-dates")?.addEventListener("click", () => this.renderReports());

    // Install App buttons
    document.getElementById("btn-install-app-sidebar")?.addEventListener("click", () => this.promptInstallPwa());
    document.getElementById("btn-install-app-header")?.addEventListener("click", () => this.promptInstallPwa());

    // Keyboard Shortcuts (F2: POS, Esc: Close Modals)
    window.addEventListener("keydown", (e) => {
      if (e.key === "F2") {
        e.preventDefault();
        this.showPos();
      } else if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
      }
    });
  }
}

// Instantiate App
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new HisabApp();
});
