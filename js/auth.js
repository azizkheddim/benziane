// نظام المصادقة الإدارية
const ADMIN_PASSWORD = "عزيزخديم";

function adminLogin() {
    const password = prompt("الرجاء إدخال كلمة المرور الإدارية:");
    if (password === ADMIN_PASSWORD) {
        window.location.href = "admin/dashboard.html";
    } else {
        alert("كلمة المرور غير صحيحة");
    }
}

function checkAuth() {
    if (window.location.pathname.includes('/admin/')) {
        const isAuthenticated = sessionStorage.getItem('authenticated');
        if (!isAuthenticated) {
            adminLogin();
        }
    }
}

// استدعاء عند تحميل الصفحات الإدارية
checkAuth();
