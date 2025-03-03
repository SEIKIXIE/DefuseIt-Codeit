
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOG-IN PAGE</title>
    <link rel="stylesheet" href="Log-in.css">
</head>
<body>
    <div>
        <h1>
            DEFUSEIT<sub>CODEIT GAME</sub>
        </h1>
        <center>
        <fieldset>
            <legend>Log-in</legend> 
            <center>
            <form action="Connect.php" method="post">
                <div class="Input-box">
                    <input type="email" id="Usern" class="input-field" required><br>
                    <label for="Usern" class="label">Username</label><br>
                </div>

                <div class="Input-box">
                    <input type="password" id="PASSWORD" class="input-field" required><br>
                    <label for="Password" class="label">Password</label><br>
                </div>

                    <input type="submit" name="submit_btn" value="LOG-IN">

                <div class="Register">
                    <span>Don't have an account? <a href="#">Sign up here</a> </span>
                </div>
                 
                
                
            </form>
            </center>
        </fieldset>
        </center>
    </div>
</body>
</html>
