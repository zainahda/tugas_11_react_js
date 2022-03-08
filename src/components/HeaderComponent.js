import React from "react";
import {
  Segment,
  Grid,
  Button,
  Divider,
  Input,
  Container,
  Icon,
} from "semantic-ui-react";

const HeaderComponent = () => {
  return (
    <div>
      <Container>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Icon name="search" />
              <h2>Cari Dokumen</h2>
              <Input icon="search" placeholder="Search document..." />
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button content="Sign up" icon="signup" size="big" />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    </div>
  );
};

export default HeaderComponent;
