import os
TEMPLATE_DIRS = [ 'templates', '.' ]
os.environ[ 'DJANGO_SETTINGS_MODULE' ] = '__main__'
SECRET_KEY = "ABAB"

import django.template.loader
import sys

content = django.template.loader.render_to_string( sys.argv[ 1 ], {} )
open( sys.argv[ 2 ], "wb" ).write( content.encode( 'utf-8' ) )
