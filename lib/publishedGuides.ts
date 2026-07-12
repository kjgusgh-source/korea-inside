import { getKpopGroupById, getKpopMemberById } from "./kpopData";

export const publishedMemberIds = [
  { groupId: "fromis-9", memberId: "song-hayoung" },
  { groupId: "fromis-9", memberId: "lee-nagyung" },
  { groupId: "fromis-9", memberId: "park-jiwon" },
  { groupId: "ive", memberId: "jang-wonyoung" },
  { groupId: "ive", memberId: "an-yujin" },
  { groupId: "ive", memberId: "gaeul" },
  { groupId: "ive", memberId: "rei" },
  { groupId: "ive", memberId: "liz" },
  { groupId: "ive", memberId: "leeseo" },
  { groupId: "aespa", memberId: "karina" },
  { groupId: "aespa", memberId: "winter" },
  { groupId: "aespa", memberId: "ningning" },
  { groupId: "bts", memberId: "jung-kook" },
  { groupId: "bts", memberId: "jimin" },
  { groupId: "bts", memberId: "v" },
  { groupId: "seventeen", memberId: "hoshi" },
  { groupId: "seventeen", memberId: "mingyu" },
  { groupId: "seventeen", memberId: "wonwoo" },
  { groupId: "rescene", memberId: "woni" },
  { groupId: "illit", memberId: "wonhee" },
  { groupId: "cortis", memberId: "keonho" },
  { groupId: "le-sserafim", memberId: "kim-chaewon" },
  { groupId: "triples", memberId: "kim-chaeyeon" },
  { groupId: "babymonster", memberId: "ahyeon" },
  { groupId: "hearts2hearts", memberId: "ian" },
];

export function getPublishedMemberGuides() {
  return publishedMemberIds.flatMap(({ groupId, memberId }) => {
    const group = getKpopGroupById(groupId);
    const member = getKpopMemberById(groupId, memberId);

    if (!group || !member) {
      return [];
    }

    return [{ group, member }];
  });
}

export function getMorePublishedMemberGuides(
  currentGroupId: string,
  currentMemberId: string,
  limit = 3
) {
  return getPublishedMemberGuides()
    .filter(
      ({ group, member }) =>
        group.id !== currentGroupId || member.id !== currentMemberId
    )
    .slice(0, limit);
}