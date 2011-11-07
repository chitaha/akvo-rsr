# -*- coding: utf-8 -*-

# Akvo RSR is covered by the GNU Affero General Public License.
# See more details in the license.txt file located at the root folder of the Akvo RSR module.
# For additional details on the GNU license please see < http://www.gnu.org/licenses/agpl.html >.


class CommandExecutor(object):

    def __init__(self, database_config, host_controller):
        self.admin_credentials = "--user='%s' --password='%s'" % (database_config.admin_user, database_config.admin_password)
        self.host_controller = host_controller
        self.feedback = host_controller.feedback

    def _execute_command(self, command_with_credentials_and_parameters):
        with self.host_controller.hide_command(): # so that we don't expose passwords in any logged output
            return self.host_controller.run(command_with_credentials_and_parameters)

    def _command_with_credentials(self, command, parameters):
        return "%s %s %s" % (command, self.admin_credentials, parameters)


class SQLStatementExecutor(CommandExecutor):

    def execute(self, statement_list):
        statement_sequence = "; ".join(statement_list)

        self.feedback.comment("Executing SQL: %s" % statement_sequence)
        return self._execute_command(self._command_with_credentials('mysql', '-e "%s"' % statement_sequence))


class DatabaseCopier(CommandExecutor):

    def create_duplicate(self, original_database_name, duplicate_database_name):
        dump_original_database = self._command_with_credentials("mysqldump", original_database_name)
        import_into_new_database = self._command_with_credentials("mysql", duplicate_database_name)

        self.feedback.comment("Copying database [%s] to [%s]" % (original_database_name, duplicate_database_name))
        self._execute_command("%s | %s" % (dump_original_database, import_into_new_database))
