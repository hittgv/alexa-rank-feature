#!/usr/bin/env bash

npm pack
docker build -t hittgv/alexa-rank-feature:1.0.0 .
