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
            // Send code to server via fetch
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
});
