import { Trophy, Medal } from "lucide-react"

const contributors = [
  { rank: 1, name: "Ravi Kumar", contributions: 24, badge: "Gold" },
  { rank: 2, name: "Priya Nair", contributions: 19, badge: "Silver" },
  { rank: 3, name: "Mohan Singh", contributions: 17, badge: "Bronze" },
  { rank: 4, name: "Anita Dey", contributions: 15, badge: "Active" },
  { rank: 5, name: "Deepa Mishra", contributions: 12, badge: "Active" },
  { rank: 6, name: "Simran Kaur", contributions: 10, badge: "Active" },
  { rank: 7, name: "Rajesh Rao", contributions: 8, badge: "Active" },
  { rank: 8, name: "Meera Joshi", contributions: 6, badge: "Active" },
]

export default function ContributorLeaderboard() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Trophy size={32} className="text-primary" />
        <h2 className="font-serif text-3xl font-bold text-foreground">Top Contributors</h2>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contributor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contributions</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Badge</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((contributor) => (
                <tr key={contributor.rank} className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {contributor.rank <= 3 ? (
                        <Medal
                          size={20}
                          className={
                            contributor.rank === 1
                              ? "text-yellow-500"
                              : contributor.rank === 2
                                ? "text-gray-400"
                                : "text-orange-600"
                          }
                        />
                      ) : (
                        <span className="text-sm font-semibold text-muted-foreground">{contributor.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-foreground">{contributor.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{contributor.contributions}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        contributor.badge === "Gold"
                          ? "bg-yellow-100 text-yellow-800"
                          : contributor.badge === "Silver"
                            ? "bg-gray-100 text-gray-800"
                            : contributor.badge === "Bronze"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-primary/10 text-primary"
                      }`}
                    >
                      {contributor.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
