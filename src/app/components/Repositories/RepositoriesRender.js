import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
  ContainerRepositories,
  TitleDescriptionRepositorie,
  Link,
  ItemRepositorie,
  Description,
  Line,
} from "./style";

export default function RepositoriesRender({ repositories }) {
  return (
    <ContainerRepositories>
      <TitleDescriptionRepositorie>
        Your repositories
      </TitleDescriptionRepositorie>
      {repositories.map((repositorie) => (
        <ItemRepositorie>
          <Link href={repositorie.html_url} target="_blank">
            {repositorie.name}
          </Link>
          <Line>
            {repositorie.language && (
              <Description>{repositorie.language}</Description>
            )}
            <Description>
              Updated at{" "}
              {moment(repositorie.updated_at).format("DD/MM/YYYY HH:mm")}
            </Description>
          </Line>
        </ItemRepositorie>
      ))}
    </ContainerRepositories>
  );
}

RepositoriesRender.propTypes = {
  repositories: PropTypes.array.isRequired,
};
