<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-up page</title>

    <style>
        body{
            background-image: url(../../../Users/Administrator/Downloads/473405771_498020793327850_3539890039440763750_n.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        div{
            margin-left: 1rem;
            margin-top: 4rem;
        }

        h1{
            font-size: 2rem;
            color: white;
            margin-left: 2.5rem;
        }

        fieldset{
            margin-top: 3rem;
            margin-left: 4rem;
            width: 120px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(30, 109, 173);
            background-color: rgb(30, 109, 173);
            box-shadow: 0px 0px 10px 0px;
        }

        input[type=text],input[type=email],input[type=password],input[type=date]{
            width: 15rem;
            height: 2rem;
            border-radius: 9px;
            margin-bottom: 1px;
        }

        input[type=radio]{
            margin-top: 10px;
        }

        #Email{
            margin-top: 1rem;
            margin-left: 1rem;
        }

        #Password{
            margin-left: 1rem;
        }

        .input-field{
        width: 300px;
        height: 40px;
        border-radius: 14px;
        border-style: solid;
        border-color: black;
        margin-top: 0px;
        background-color: rgb(49, 45, 45);
        color: white;
    }

    .labelfn{
        position: absolute;
        top: 14.9rem;
        left: 10rem;
        transition: .2s ease-in-out;
        color: white;
    }

    .input-field:focus ~ .labelfn,
    .input-field:valid ~ .labelfn{
        position:absolute;
        top: 13.6rem;
        font-size: 15px;
        border-radius: 9px;
        color: var(--black-color);
        padding: 0 10px;
        background-color: white;
        color: blue;
    }

    .labelln{
        position: absolute;
        top: 18.5rem;
        left: 10rem;
        transition: .2s ease-in-out;
        color: white;
    }

    .input-field:focus ~ .labelln,
    .input-field:valid ~ .labelln{
        position:absolute;
        top: 17.2rem;
        font-size: 15px;
        border-radius: 9px;
        color: var(--black-color);
        padding: 0 10px;
        background-color: white;
        color: blue;
    }

    .labele{
        position: absolute;
        top: 27rem;
        left: 10rem;
        transition: .2s ease-in-out;
        color: white;
    }

    .input-field:focus ~ .labele,
    .input-field:valid ~ .labele{
        position:absolute;
        top: 25.7rem;
        font-size: 15px;
        border-radius: 9px;
        color: var(--black-color);
        padding: 0 10px;
        background-color: white;
        color: blue;
    }

    .labell{
        position: absolute;
        top: 30.5rem;
        left: 10rem;
        transition: .2s ease-in-out;
        color: white;
    }

    .input-field:focus ~ .labell,
    .input-field:valid ~ .labell{
        position:absolute;
        top: 469px;
        font-size: 15px;
        border-radius: 9px;
        color: var(--black-color);
        padding: 0 10px;
        background-color: white;
        color: blue;
    }

    .Gender{
        margin-left: 1.5rem;
        color: white;
        margin-bottom: 10%;
    }

    #FirstName:hover,#LastName:hover,#Email:hover,#Password:hover{
        background-color: palevioletred;
        box-shadow: inset;
    }

    input[type=submit]{
        margin-top: 10px;
        float: right;
        padding: 5px 18px;
        border-radius: 10px;
        border-style: solid;
        border-color: blueviolet;
        background-color: blueviolet;
        color: white;
    }

    input[type=submit]:active{
        width: 80px;
        height: 35px;
        box-shadow: 0px 0px 10px 10px;
        
    }
    </style>
</head>
<body>
    <div class="Container">
        <h1>DEFUSEIT<sub>CODEIT GAME</sub></h1>
        <fieldset>
            <form action="game_data.php" method="post">
            <div class="Input-box">
                <input type="text" id="FirstName" name="FirstName" class="input-field" required><br>
                <label for="FirstName" class="labelfn">First Name:</label><br>
                <input type="text" id="LastName" name="LastName" class="input-field" required><br>
                <label for="LastName" class="labelln">Last Name:</label><br>
                
                <input type="number" id="age" name="DOB" class="input-field" value="age" required><br>
            </div>
            
                <label for="male" class="Gender">Gender:</label>
                <input type="radio" name="gender" id="female" value="female">
                <input type="radio" name="gender" id="male" value="male"><br>
                <input type="email" id="Email" class="input-field" name="Email" required><br>
                <label for="Email" class="labele">Email:</label><br>
                <input type="password" id="Password" class="input-field" name="Password" required><br>
                <label for="Password" class="labell">Password:</label><br>
            
                <input type="submit" value="Sign-up">
                </form>
        </fieldset>
    </div>
</body>
</html>