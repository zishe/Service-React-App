import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';

const Form = styled.form`
  && {
    float: left;
  }
`;

export class ModificationForm extends Component {
  static propTypes = {
    render: PropTypes.node
  }

  render() {
    return (
      <Form autoComplete="off">
        {this.props.render}
      </Form>
    );
  }
}

export default ModificationForm;
