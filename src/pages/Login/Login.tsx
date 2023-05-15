import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/Layout/Container/Container";
import Anchor from "../../components/UI/Anchor/Anchor";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import HTag from "../../components/UI/HTag/HTag";
import Input from "../../components/UI/Input/Input";
import PTag from "../../components/UI/PTag/PTag";
import { RANDOM } from "../../helpers/random-id";

import styles from "./Login.module.css";

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <div className={styles.wrap}>
          <HTag tag="h1">Вход в учетную запись</HTag>

          <form action="" method="post">
            <div className={styles.pair}>
              <PTag size="small">E-mail</PTag>
              <Input type="text" placeholder="Введите свой e-mail" />
            </div>
            <div className={styles.pair}>
              <PTag size="small">Пароль</PTag>
              <Input type="password" placeholder="Введите пароль" />
            </div>
            <div className={styles.checkline}>
              <Checkbox id={RANDOM.id} checked={false} onSelect={() => true} />
              <PTag>Запомнить меня</PTag>
            </div>
            <div className={styles.actions}>
              <Button>Войти</Button>
              <Anchor
                onAnchorClick={() => navigate("/auth/register")}
                color="#C06ECC"
              >
                У меня еще нет аккаунта
              </Anchor>
            </div>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
