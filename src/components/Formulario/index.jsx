import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import { useFormContext } from "../../context/contextoFormulario";
import { Select } from "../Select";
import { useQuery } from "@tanstack/react-query";

const Formulario = () => {
  const [state, dispatch] = useFormContext();

  const { isLoading, error, data } = useQuery(["getPokemonTypes"], () =>
    fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json())
  );

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input
                name="nome"
                label="Nome"
                value={state.coach.name}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: {
                      field: "name",
                      value,
                    },
                  });
                }}
              />
              <Input
                name="sobrenome"
                label="Sobrenome"
                value={state.coach.lastName}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: {
                      field: "lastName",
                      value,
                    },
                  });
                }}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                value={state.coach.email}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: {
                      field: "email",
                      value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input
                name="nomePokemon"
                label="Nome"
                value={state.pokemon.name}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: {
                      field: "name",
                      value,
                    },
                  });
                }}
              />
              <Select
                name="tipoPokemon"
                label="Tipo"
                disabled={isLoading || error}
                options={data?.results}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: {
                      field: "type",
                      value,
                    },
                  });
                }}
              />
              <Input
                name="element"
                label="Elemento"
                value={state.pokemon.element}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: {
                      field: "element",
                      value,
                    },
                  });
                }}
              />
              <Input
                name="height"
                label="Altura"
                type="number"
                value={state.pokemon.height}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: {
                      field: "height",
                      value,
                    },
                  });
                }}
              />
              <Input
                name="age"
                label="Idade"
                value={state.pokemon.age}
                onChange={(value) => {
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: {
                      field: "age",
                      value,
                    },
                  });
                }}
              />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;
