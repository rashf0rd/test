<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="/public/styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My PHP App</h1>
    </header>
    <main>
        <section>
            <h2>User Information</h2>
            <?php
            // Assuming $users is an array of User objects passed from the HomeController
            if (!empty($users)) {
                foreach ($users as $user) {
                    echo "<div class='user'>";
                    echo "<p>ID: " . htmlspecialchars($user->id) . "</p>";
                    echo "<p>Name: " . htmlspecialchars($user->name) . "</p>";
                    echo "<p>Email: " . htmlspecialchars($user->email) . "</p>";
                    echo "</div>";
                }
            } else {
                echo "<p>No users found.</p>";
            }
            ?>
        </section>
    </main>
    <footer>
        <p>&copy; <?php echo date("Y"); ?> My PHP App</p>
    </footer>
</body>
</html>