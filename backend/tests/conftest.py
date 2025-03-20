"""
This file is used to set up the environment for pytest. It is automatically loaded by pytest when running tests.
"""

# import pytest
# from backend.src.db import settings

# The example below is based on documentation from https://pytest-django.readthedocs.io/en/latest/database.html,
# but it doesn't work. We made a workaround to set the default DB to in-memory DB in the settings.py based on the
# USE_TEST_DB environment variable.

# @pytest.fixture(scope='session')
# def django_db_setup():
#     settings.DATABASES['default'] = {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": ":memory:",
#     }
