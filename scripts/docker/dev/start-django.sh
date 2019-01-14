#!/usr/bin/env bash

set -eu

./scripts/docker/dev/wait-for-dependencies.sh

python manage.py migrate --noinput
#python manage.py collectstatic
python manage.py runserver 0.0.0.0:8000
