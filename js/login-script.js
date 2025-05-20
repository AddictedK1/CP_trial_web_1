document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Theme' : 'Dark Theme';
    });

    // CodeMirror setup
    if (document.getElementById('code-editor')) {
        const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
            mode: 'javascript',
            lineNumbers: true,
            theme: 'default',
            tabSize: 2
        });

        // Run code
        document.getElementById('run-code').addEventListener('click', () => {
            const code = editor.getValue();
            const output = document.getElementById('output');
            try {
                // Redirect console.log to output div
                const oldLog = console.log;
                let outputText = '';
                console.log = (msg) => outputText += msg + '\n';
                eval(code);
                console.log = oldLog;
                output.textContent = outputText || 'No output';
            } catch (error) {
                output.textContent = 'Error: ' + error.message;
            }
        });

        // Submit code
        document.getElementById('submit-code').addEventListener('click', () => {
            const code = editor.getValue();
            fetch('php/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'code=' + encodeURIComponent(code)
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('output').textContent = data;
            })
            .catch(error => {
                document.getElementById('output').textContent = 'Submission error: ' + error.message;
            });
        });
    }

    // Login/Signup tab switching
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form-content');
    if (tabs && forms) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                forms.forEach(f => f.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`${tab.dataset.tab}-form`).classList.add('active');
            });
        });
    }

    // Form validation
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const error = document.getElementById('login-error');
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                error.textContent = 'Invalid email format';
                return;
            }
            if (password.length < 6) {
                error.textContent = 'Password must be at least 6 characters';
                return;
            }
            error.textContent = '';
            loginForm.submit(); // Submit to PHP
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const error = document.getElementById('signup-error');
            
            if (username.length < 3) {
                error.textContent = 'Username must be at least 3 characters';
                return;
            }
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                error.textContent = 'Invalid email format';
                return;
            }
            if (password.length < 6) {
                error.textContent = 'Password must be at least 6 characters';
                return;
            }
            if (password !== confirmPassword) {
                error.textContent = 'Passwords do not match';
                return;
            }
            error.textContent = '';
            signupForm.submit(); // Submit to PHP
        });
    }
});