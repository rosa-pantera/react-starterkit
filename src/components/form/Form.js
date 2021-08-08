export default function Form() {
	return (
		<div className="bg-white shadow rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h3 className="text-lg leading-6 font-medium text-gray-900">Add another todo</h3>
				<div className="mt-2 max-w-xl text-sm text-gray-500">
					<p>Just when you thought your todo list couldn't get any longer, you came up with another idea!</p>
				</div>
				<form className="mt-5 sm:flex sm:items-center">
					<div className="w-full sm:max-w-xs">
						<label htmlFor="todo" className="sr-only">
							Todo
						</label>
						<input
							type="text"
							name="todo"
							id="todo"
							className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							placeholder="Get delicious food"
							autoComplete="none"
						/>
					</div>
					<button
						type="submit"
						className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					>
						Save
					</button>
				</form>
			</div>
		</div>
	)
}