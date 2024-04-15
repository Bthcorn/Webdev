import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchResults } from "@/components/search-results"


export default function Page({ searchParams } : {searchParams : any}) {
	const {q} = searchParams
	const data = {
		items: [
		{
			id: "1",
			title: "Hello",
			description: "World",
			link: "https://google.com"
		},
		{
			id: "2",
			title: "Hello",
			description: "World",
			link: "https://google.com"
		},
		{
			id: "3",
			title: "Hello",
			description: "World",
			link: "https://google.com"
		},
		] 
	}
	return (
        <main
				className="flex flex-col gab-4"
				>
					<div
					className="flex"
					>
						<Input>
						</Input>
						<Button>
							Search
						</Button>
					</div>
					<SearchResults {...data}/>
				</main>
    )
}