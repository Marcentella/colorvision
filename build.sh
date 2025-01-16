#!/usr/bin/bash
# exit on error

pip install -r requirements.txt

python.py collectstatic --noinput
python.py manage.py migrate
