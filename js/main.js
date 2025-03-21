document.addEventListener('DOMContentLoaded', function() {
    // 固定导航栏效果
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // 移动端菜单切换
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // 平滑滚动导航链接
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    
                    window.scrollTo({
                        top: targetPosition - headerHeight,
                        behavior: 'smooth'
                    });
                    
                    // 如果是移动菜单，点击后关闭菜单
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // 回到顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 添加动画效果
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // 初始检查
    checkIfInView();
    
    // 滚动时检查
    window.addEventListener('scroll', checkIfInView);
}); 