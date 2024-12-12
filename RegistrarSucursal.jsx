import styled from "styled-components";
import { v } from "../../../styles/variables";
import { InputText, Btn1, useSucursalesStore } from "../../../index";
import { useForm } from "react-hook-form";
import { BtnClose } from "../../ui/buttons/BtnClose";
export function RegistrarSucursal() {
  const { accion, sucursalesItemSelect, setStateSucursal } =
    useSucursalesStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {accion == "Editar"
                ? "Editar sucursal"
                : "Registrar nueva sucursal"}
            </h1>
          </section>

          <section>
            <BtnClose funcion={() => setStateSucursal(false)} />
          </section>
        </div>

        <form className="formulario">
          <section className="form-subcontainer">
            <article>
              <InputText icono={<v.iconoflechaderecha />}>
                <input
                  className="form__field"
                  defaultValue={sucursalesItemSelect?.nombre}
                  type="text"
                  placeholder="sucursal"
                  {...register("nombre", {
                    required: true,
                  })}
                />
                <label className="form__label">sucursal</label>
                {errors.nombre?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icono={<v.iconoflechaderecha />}>
                <input
                  className="form__field"
                  defaultValue={
                    accion === "Editar"
                      ? sucursalesItemSelect?.cajas[0]?.direccion_fiscal
                      : ""
                  }
                  type="text"
                  placeholder="direccion fiscal"
                  {...register("direccion_fiscal", {
                    required: true,
                  })}
                />
                <label className="form__label">direccion fiscal</label>
                {errors.direccion_fiscal?.type === "required" && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>

            <Btn1
              icono={<v.iconoguardar />}
              titulo="Guardar"
              bgcolor="#F9D70B"
            />
          </section>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  .sub-contenedor {
    position: relative;
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.body};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;
    max-height: 80vh;
    overflow-y: auto;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      .form-subcontainer {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;
