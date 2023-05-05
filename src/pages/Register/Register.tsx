import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/Layout/Container/Container";
import Anchor from "../../components/UI/Anchor/Anchor";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import HTag from "../../components/UI/HTag/HTag";
import Input from "../../components/UI/Input/Input";
import PTag from "../../components/UI/PTag/PTag";

import styles from "./Register.module.css";

const Register: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <div className={styles.wrap}>
          <HTag tag="h1">Создание учетной записи</HTag>
          <div className={styles.pair}>
            <PTag size="small">E-mail</PTag>
            <Input type="text" placeholder="Введите свой e-mail" />
          </div>
          <div className={styles.pair}>
            <PTag size="small">Пароль</PTag>
            <Input type="password" placeholder="Введите пароль" />
          </div>
          <div className={styles.pair}>
            <PTag size="small">Повторите пароль</PTag>
            <Input type="password" placeholder="Повторите пароль" />
          </div>
          <div className={styles.actions}>
            <Button>Регистрация</Button>
            <Anchor
              onAnchorClick={() => navigate("/auth/login")}
              color="#C06ECC"
            >
              У меня уже есть аккаунт
            </Anchor>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
