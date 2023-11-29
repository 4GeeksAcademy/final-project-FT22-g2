"""empty message

Revision ID: 15ca67e6bc54
Revises: e110b6817d92
Create Date: 2023-11-29 19:23:08.552500

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15ca67e6bc54'
down_revision = 'e110b6817d92'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.create_unique_constraint(None, ['username'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')

    # ### end Alembic commands ###
