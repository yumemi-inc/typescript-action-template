import { exit } from 'node:process';

import { error, getInput } from '@actions/core';
import { context } from '@actions/github';
import { Octokit } from '@octokit/rest';

const getInputRequired = (name: string) =>
  getInput(name, {
    required: true,
  });

(async () => {
  const octokit = new Octokit({
    baseUrl: context.apiUrl,
    auth: getInputRequired('token'),
  });

  // Do something...
})()
  .then()
  .catch((e) => {
    error(e);
    exit(1);
  });
