<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Clientes</title>

    <link rel="shorcut icon" href="../imagens/logo-black.jpeg">

    <link rel="stylesheet" href="../css/estilo.css">
    <link rel="stylesheet" href="../css/modo-dark.css">
    <link rel="stylesheet" href="../css/menu-mobile.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
</head>

<body>
    <header id="topo">
        <nav class="nav-bar">

            <div class="logo">
                <a href="index.php">
                    <img class="imagem-logo" src="../imagens/logo-black.jpeg" alt="logo da loja" width="130px">
                </a>
            </div>

            <div class="nav-list">
                <ul>
                    <li class="nav-item"><a href="index.php" class="nav-link"><b>HOME</b></a></li>
                    <li class="nav-item"><a href="#contato" class="nav-link"><b>CONTATO</b></a></li>
                    <li class="nav-item"><a href="#sobre-nos" class="nav-link"><b>SOBRE NÓS</b></a></li>
                    <li class="nav-item"><a href="cardapio.php" class="nav-link"><b>MENU</b></a></li>
                    <li class="nav-item"><a href="cadastro.php" class="nav-link"><b>CADASTRO</b></a></li>
                    <li class="login-button"><a href="login.php"><b>LOGIN</b></a></li>
                    <!--<li class="nav-item">
                        <div class="dark-icone">
                            <i id="item-lua" class="fa-solid fa-moon"></i>
                        </div>
                    </li>-->
                </ul>

                <div>
                    <div class="mobile-menu-icon">
                        <button onclick="menuShow()">
                            <img class="icon" src="../imagens/menu_white_36dp.svg">
                        </button>
                    </div>

                    <div class="dark-icone">
                        <i id="item-lua" class="fa-solid fa-moon"></i>
                    </div>
                </div>

                <div>
                    <img src="../imagens/profile.png" class="user-pic" onclick="toggleMenu()">
                    <div class="sub-menu-wrap" id="subMenu">
                        <div class="sub-menu">
                            <div class="user-info">
                                <img src="../imagens/profile.png">
                                <h2>Fulano Beltrano</h2>
                            </div>

                            <div class="usuario-admin">
                                <a href="lista_cliente.php" class="sub-menu-link">Clientes</a>
                                <a href="lista_produto.php" class="sub-menu-link">Produtos</a>
                            </div>

                            <hr>

                            <a href="#" class="sub-menu-link">
                                <img src="">
                                <p>Perfil</p>
                                <span>></span>
                            </a>

                            <a href="#" class="sub-menu-link">
                                <img src="../imagens/help.png">
                                <p>Meus pedidos</p>
                                <span>></span>
                            </a>

                            <a href="#" class="sub-menu-link">
                                <img src="../imagens/logout.png">
                                <p>Sair</p>
                                <span>></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        

            <div class="mobile-menu">
                <ul>
                    <li class="nav-item"><a href="index.php" class="nav-link"><b>HOME</b></a></li>
                    <li class="nav-item"><a href="#contato" class="nav-link"><b>CONTATO</b></a></li>
                    <li class="nav-item"><a href="#sobre-nos" class="nav-link"><b>SOBRE NÓS</b></a></li>
                    <li class="nav-item"><a href="cardapio.php" class="nav-link"><b>MENU</b></a></li>
                    <li class="nav-item"><a href="cadastro.php" class="nav-link"><b>CADASTRO</b></a></li>
                    <li class="login-button"><a href="login.php"><b>LOGIN</b></a></li>
                </ul>
            </div>
        </nav>

    </header>

    <main class="body-cliente">
        sjfdsbfdbfss
        <div>
            <?php
                $sql = "SELECT * FROM cliente";
                $res = $conn->query($sql);
                $qtd = $res->num_rows;

                if($qtd > 0){
                    print "<table class='table table-hover table-bordered'>";
                    print "<tr>";
                    print "<th> id  </th>";
                    print "<th> nome </th>";
                    print "<th>email </th>";
                    print "<th> data de nascimento </th>";
                    print "<th> ação </th>";
                    print "</tr>";
                    while($row = $res->fetch_object()){
                        print "<tr>";
                        print "<td>". $row->id . "</td>";
                        print "<td>". $row->nome. "</td>";
                        print "<td>". $row->email. "</td>";
                        print "<td>". $row->data_nasc. "</td>";
                        print "<td> 
                        <button onclick=\"location.href='?page=editar&id=".$row->id."';\"
                        class='btn btn-sucess'> editar</button>
            
                        <button onclick=\"if(confirm('Tem certeza que deseja excluir?')){location.href='?page=salvar&acao=excluir&id=".$row->id."'}else{false;}\" class='btn btn-danger'> excluir </button>
                        </td>";
                        print "</tr>";
                    }
                    print "</table>";
                    }
                    else{
                        print "<p class='alert alert-danger'>Não existe!</p>";
                    }
                

            ?>
        </div>
    </main>

</body>
</html>