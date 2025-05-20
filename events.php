<?php
$upcoming_events = [
    ["title" => "Monthly Coding Challenge", "date" => "2025-06-01", "description" => "Join our monthly coding contest!"],
    ["title" => "Algorithm Workshop", "date" => "2025-06-15", "description" => "Learn advanced algorithms with experts."]
];
$past_events = [
    ["title" => "Spring Code Sprint", "date" => "2025-03-10", "description" => "A 48-hour coding marathon."],
    ["title" => "Beginner Bootcamp", "date" => "2025-02-20", "description" => "Introduction to competitive programming."]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CP Club - Events</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">CP Club</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="problems.html">Problems</a></li>
                <li><a href="events.php" class="active">Events</a></li>
                <li><a href="playground.html">Playground</a></li>
            </ul>
            <button id="theme-toggle">Toggle Theme</button>
        </nav>
    </header>
    <main>
        <section class="events">
            <h1>Upcoming Events</h1>
            <div class="event-list">
                <?php foreach ($upcoming_events as $event): ?>
                    <div class="event-card">
                        <h3><?php echo $event['title']; ?></h3>
                        <p>Date: <?php echo $event['date']; ?></p>
                        <p><?php echo $event['description']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <h1>Past Events</h1>
            <div class="event-list">
                <?php foreach ($past_events as $event): ?>
                    <div class="event-card">
                        <h3><?php echo $event['title']; ?></h3>
                        <p>Date: <?php echo $event['date']; ?></p>
                        <p><?php echo $event['description']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 CP Club. All rights reserved.</p>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>